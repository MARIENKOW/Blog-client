import { MainWrapper } from "../components/wrappers/MainWrapper";
import "./globals.scss";
import { inter, montserrat } from "../fonts/index";
import config from "../configs/config";

const image = config.SERVER_API+ "/meta/metaLogo.png"
export const metadata = {
   title: "Новости Израиля",
   description: "",
   openGraph: {
      images:[image],
   },
};
export default function RootLayout({ children }) {
   return (
      <html className={montserrat.className} lang="ru">
         <body>
            <MainWrapper>{children}</MainWrapper>
         </body>
      </html>
   );
}
