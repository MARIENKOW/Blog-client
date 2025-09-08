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
import * as React from "react";
import { StarCheckbox } from "./StarCheckbox";
import {
    ADMIN_BLOG_UPDATE_ROUTE,
    BLOG_ROUTE,
} from "../../../configs/routerLinks";
import { enqueueSnackbar } from "notistack";
import BlogService from "../../../services/BlogService";
import { CanceledError } from "axios";

const blogImportant = new BlogService();

const BlogItem = ({ Blog, deletePost }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const menu = Boolean(anchorEl);
    const [checked, setChecked] = useState(!!Blog.is_important);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    console.log(checked);
    const changeImportant = async () => {
        try {
            await blogImportant.setImportant(Blog.id, {
                is_important: !checked,
            });
            setChecked((v) => !v);
            enqueueSnackbar("Статус новости изменен", {
                variant: "success",
            });
        } catch (error) {
            if (error instanceof CanceledError) return;
            enqueueSnackbar("Упс! что-то пошло не так", {
                variant: "error",
            });
        }
    };

    if (!Blog) return "";
    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardHeader
                sx={{
                    bgcolor: grey[900],
                    p: "10px !important",
                    "& .MuiCardHeader-action": {
                        marginTop: "0px !important",
                        marginBottom: "0px !important",
                    },
                }}
                avatar={
                    <StarCheckbox getData={changeImportant} checked={checked} />
                }
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
