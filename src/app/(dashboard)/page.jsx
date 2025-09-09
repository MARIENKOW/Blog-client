import BlogService from "../../services/BlogService";
import ErrorElement from "../../components/ErrorElement";
import { Empty } from "../../components/Empty";

import WithTitleWrapper from "../../components/wrappers/WithTitleWrapper";
import { BlogsUser } from "../../components/blog/BlogsUser";
import { Box } from "@mui/material";
import { BlogItemMain } from "../../components/blog/item/BlogItemMain";
import { ContainerComponent } from "../../components/wrappers/ContainerComponent";
import { BlogsImportant } from "../../components/blog/BlogsImportant";
import { BlogsShort } from "../../components/blog/BlogsShort";
import { Map } from "../../components/Map";

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
                <WithTitleWrapper title={"Новости Израиля"}>
                    <Empty />
                </WithTitleWrapper>
            );

        return (
            <WithTitleWrapper title={"Новости Израиля"}>
                <Box display={"flex"} flexDirection={"column"} gap={7}>
                    <BlogsShort />
                    <ContainerComponent sx={{ p: { xs: 0, md: 2 } }}>
                        <BlogItemMain Blog={dataMain} />
                    </ContainerComponent>
                    <BlogsImportant />
                    <ContainerComponent>
                        <BlogsUser data={data} />
                    </ContainerComponent>
                    <Map />
                </Box>
            </WithTitleWrapper>
        );
    } catch (error) {
        console.log(error);
        return (
            <WithTitleWrapper title={"Новости Израиля"}>
                <ErrorElement />
            </WithTitleWrapper>
        );
    }
}
