import style from "./BlogItem.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid2 as Grid } from "@mui/material";
import Link from "next/link";
import { BLOG_ROUTE } from "../../../configs/routerLinks";
import DatePharse from "../../../components/DatePharse";
import { grey } from "@mui/material/colors";
import { BlogItemContent } from "./BlogItemContent";

const BlogItemUser = ({ Blog }) => {
    if (!Blog) return "sdfsdf";
    return (
        <Link href={BLOG_ROUTE + "/" + Blog?.id}>
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #bebebe",
                    borderRadius: 5,
                    cursor: "pointer",
                    transition: ".2s",
                    "&:hover": {
                        transform: "scale(1.01)",
                    },
                }}
            >
                <BlogItemContent Blog={Blog} />
            </Card>
        </Link>
    );
};

export default BlogItemUser;
