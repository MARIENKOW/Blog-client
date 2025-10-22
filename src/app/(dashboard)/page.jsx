import BlogService from "../../services/BlogService";
import ErrorElement from "../../components/ErrorElement";
import { Empty } from "../../components/Empty";

import WithTitleWrapper from "../../components/wrappers/WithTitleWrapper";
import { BlogsUser } from "../../components/blog/BlogsUser";
import { Box, Button } from "@mui/material";
import { BlogItemMain } from "../../components/blog/item/BlogItemMain";
import { ContainerComponent } from "../../components/wrappers/ContainerComponent";
import { BlogsImportant } from "../../components/blog/BlogsImportant";
import { BlogsShort } from "../../components/blog/BlogsShort";
import { ScrollToForm } from "./ScrollToForm";
import { Persons } from "./Persons";

export const dynamic = "force-dynamic";

const blog = new BlogService();
const blogMain = new BlogService();

export default async function Page() {
    try {
        const [{ data }, { data: dataMain }] = await Promise.all([
            blog.getAll(),
            blogMain.getMain(),
        ]);

        if (!data?.data || data?.data?.length === 0)
            return (
                <WithTitleWrapper
                    title={"LAHAV 433 לַהַב"}
                    subtitle={"Специальное подразделения полиции Израиля"}
                    imgSrc={"/title-logo.png"}
                >
                    <Empty />
                </WithTitleWrapper>
            );

        return (
            <Box pt={15}>
                <WithTitleWrapper
                    title={"LAHAV 433 לַהַב"}
                    subtitle={"Специальное подразделения полиции Израиля"}
                    imgSrc={"/title-logo.png"}
                >
                    <Box display={"flex"} flexDirection={"column"} gap={7}>
                        <BlogsShort />
                        <ScrollToForm />
                        <ContainerComponent sx={{ p: { xs: 0, md: 2 } }}>
                            <BlogItemMain Blog={dataMain} />
                        </ContainerComponent>
                        <Persons />
                        <BlogsImportant />
                        <ContainerComponent>
                            <BlogsUser data={data} />
                        </ContainerComponent>
                    </Box>
                </WithTitleWrapper>
            </Box>
        );
    } catch (error) {
        console.log(error);
        return (
            <WithTitleWrapper
                subtitle={"Специальное подразделения полиции Израиля"}
                title={"LAHAV 433 לַהַב"}
                imgSrc={"/title-logo.png"}
            >
                <ErrorElement />
            </WithTitleWrapper>
        );
    }
}
