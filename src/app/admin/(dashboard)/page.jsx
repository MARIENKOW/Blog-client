import { Box, Button } from "@mui/material";
import Link from "next/link";
import {
    ADMIN_BLOG_CREATE_ROUTE,
    ADMIN_BLOG_ROUTE,
    ADMIN_PRODUCTLINE_CREATE_ROUTE,
} from "../../../configs/routerLinks";
import { ContainerComponent } from "../../../components/wrappers/ContainerComponent";
import Blogs from "../../../components/blog/Blogs";
import BreadcrumbsComponent from "../../../components/BreadcrumbsComponent";

export default function Page() {
    return (
        <ContainerComponent
            sx={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
            <Box flex={1} gap={2} display={"flex"} flexDirection={"column"}>
                <Box
                    display={"flex"}
                    justifyContent={"end"}
                    flexDirection={{ xs: "column", sm: "row" }}
                    gap={2}
                    flexWrap={"wrap"}
                >
                    <Link href={ADMIN_BLOG_CREATE_ROUTE}>
                        <Button fullWidth variant="contained">
                            Додати
                        </Button>
                    </Link>
                </Box>
                <Blogs />
            </Box>
        </ContainerComponent>
    );
}
