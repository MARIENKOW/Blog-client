import { Suspense } from "react";
import Loading from "../../components/loading/Loading";
import { Box } from "@mui/system";
import ImgBG from "../../components/ImgBG";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
    return (
        <>
            <Box
                position={"relative"}
                flex={1}
                display={"flex"}
                flexDirection={"column"}
                overflow={"hidden"}
            >
                {/* <ImgBG /> */}
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    flex={1}
                    position={"relative"}
                    zIndex={"10 "}
                >
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </Box>
            </Box>
        </>
    );
}
