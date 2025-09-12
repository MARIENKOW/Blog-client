import { Box, Button } from "@mui/material";
import Link from "next/link";
import { ADMIN_BLOG_CREATE_ROUTE } from "../../../configs/routerLinks";
import { ContainerComponent } from "../../../components/wrappers/ContainerComponent";
import Blogs from "../../../components/blog/Blogs";

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
                            Добавить
                        </Button>
                    </Link>
                </Box>
                <Blogs />
            </Box>
        </ContainerComponent>
    );
}
