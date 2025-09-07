import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Menu, MenuItem, ListItemIcon, Grid2 as Grid } from "@mui/material";
import { CardHeader } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import { BlogItemContent } from "./BlogItemContent";

import {
    ADMIN_BLOG_UPDATE_ROUTE,
    BLOG_ROUTE,
} from "../../../configs/routerLinks";

const BlogItem = ({ Blog, deletePost }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const menu = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    if (!Blog) return "sdfsdf";
    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardHeader
                sx={{ bgcolor: grey[900] }}
                action={
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={menu ? "long-menu" : undefined}
                        aria-expanded={menu ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon htmlColor={grey[50]} fontSize="medium" />
                    </IconButton>
                }
            />
            <Menu
                id="long-menu"
                MenuListProps={{
                    "aria-labelledby": "long-button",
                }}
                open={menu}
                onClose={handleClose}
                anchorEl={anchorEl}
                sx={{ paddingBottom: 0 }}
            >
                <Link target="_blank" href={BLOG_ROUTE + "/" + Blog?.id}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <OpenInNewIcon />
                        </ListItemIcon>
                        Просмотреть
                    </MenuItem>
                </Link>
                <Link href={ADMIN_BLOG_UPDATE_ROUTE + "/" + Blog?.id}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                        Редактировать
                    </MenuItem>
                </Link>

                <MenuItem
                    sx={{ color: red[900], bgcolor: red[50] }}
                    onClick={() => {
                        handleClose();
                        deletePost(Blog?.id, Blog?.title);
                    }}
                >
                    <ListItemIcon sx={{ color: red[900] }}>
                        <DeleteForeverIcon />
                    </ListItemIcon>
                    <Typography textTransform="capitalize" textAlign="center">
                        Удалить
                    </Typography>
                </MenuItem>
            </Menu>
            <BlogItemContent Blog={Blog} />
        </Card>
    );
};

export default BlogItem;
