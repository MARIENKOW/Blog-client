import BlogService from "../../services/BlogService";
import ErrorElement from "../../components/ErrorElement";
import { Empty } from "../../components/Empty";

import WithTitleWrapper from "../../components/wrappers/WithTitleWrapper";
import { BlogsUser } from "../../components/blog/BlogsUser";
import { Box } from "@mui/material";
import { BlogItemMain } from "../../components/blog/item/BlogItemMain";
import { ContainerComponent } from "../../components/wrappers/ContainerComponent";

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
                <ContainerComponent>
                    <Box display={"flex"} flexDirection={"column"} gap={7}>
                        <BlogItemMain Blog={dataMain} />
                        <BlogsUser data={data} />;
                    </Box>
                </ContainerComponent>
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
