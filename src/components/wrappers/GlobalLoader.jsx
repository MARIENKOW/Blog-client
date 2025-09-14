"use client";

import { LinearProgress } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GlobalLoader({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Слушаем нажатие на ссылки через router.push()
    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleStop = () => setLoading(false);

        // Monkey patch router.push и router.replace
        const originalPush = router.push;
        router.push = (...args) => {
            handleStart();
            return originalPush(...args).finally(handleStop);
        };
        const originalReplace = router.replace;
        router.replace = (...args) => {
            handleStart();
            return originalReplace(...args).finally(handleStop);
        };

        return () => {
            router.push = originalPush;
            router.replace = originalReplace;
        };
    }, [router]);

    // Срабатывает при смене pathname (если кто-то нажал <Link>)
    useEffect(() => {
        setLoading(false);
    }, [pathname]);
    console.log('loading '+loading);

    return (
        <>
            {loading && (
                <LinearProgress
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        zIndex: 9999,
                    }}
                />
            )}
            {children}
        </>
    );
}
