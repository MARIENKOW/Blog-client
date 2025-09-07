import BreadcrumbsComponent from "../../../components/BreadcrumbsComponent";
import { ContainerComponent } from "../../../components/wrappers/ContainerComponent";
import { Box } from "@mui/material";
import { BLOG_ROUTE, MAIN_ROUTE } from "../../../configs/routerLinks";
import BlogService from "../../../services/BlogService";
import RedirectWithMessage from "../../../components/events/RedirectWithMessage";
import BlogFullItem from "../../../components/blog/item/BlogFullItem";

const blog = new BlogService();

export default async function Page({ params }) {
   const {id} = await params
   try {
      const { data } = await blog.getById(id);

      if (!data)
         return (
            <RedirectWithMessage
               message="Упс! Блог не найдено"
               link={MAIN_ROUTE}
            />
         );

      return (
         <Box>
            <Box pt={2} pb={10} overflow={"hidden"} position={"relative"}>
               <ContainerComponent>
                  <BreadcrumbsComponent
                     sx={{
                        position: "relative",
                        zIndex: "10",
                        display: "inline-block",
                        ol: {
                           borderRadius: 2,
                           display: "inline-flex",
                           backgroundColor: "#fff",
                           padding: "5px 15px",
                        },
                     }}
                     main={false}
                     options={[
                        { name: "Новости", link: MAIN_ROUTE },
                        { name: data?.title },
                     ]}
                  />
                  <Box mt={5}>
                     <BlogFullItem Blog={data} />
                  </Box>
               </ContainerComponent>
            </Box>
         </Box>
      );
   } catch (error) {
      return <RedirectWithMessage link={MAIN_ROUTE} />;
   }
}
