import { Suspense } from "react";
import Loading from "../../components/loading/Loading";
import { Box } from "@mui/system";
import ImgBG from "../../components/ImgBG";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Phones from "../../components/Phones";
import { HeaderWrapper } from "../../components/HeaderWrapper";

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
                <ImgBG/>
                <HeaderWrapper/>
                {/* <Header data={[{number:+99288294440},{number:+99288294440},{number:+99288294440}]} /> */}
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    flex={1}
                    position={"relative"}
                    zIndex={"10 "}
                >
                    {children}
                </Box>
                <Footer />
            </Box>
        </>
    );
}
