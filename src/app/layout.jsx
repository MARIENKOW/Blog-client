import { MainWrapper } from "../components/wrappers/MainWrapper";
import "./globals.scss";
import { inter, montserrat } from "../fonts/index";
import config from "../configs/config";

const image = config.SERVER_API + "/meta/metaLogo.png";
export const metadata = {
    title: "Лахав 433",
    description: "",
    openGraph: {
        images: [image],
    },
};
export default function RootLayout({ children }) {
    return (
        <html
            style={{ background: "#023460e6" }}
            className={montserrat.className}
            lang="ru"
        >
            <body style={{ background: "#fff" }}>
                <MainWrapper>{children}</MainWrapper>
            </body>
        </html>
    );
}
