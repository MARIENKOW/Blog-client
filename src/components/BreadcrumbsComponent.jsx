"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTheme } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { ADMIN_ROUTE } from "../configs/routerLinks";
import { StyledLink } from "./StyledLink";
import Link from "next/link";

export default function BreadcrumbsComponent({
    main = true,
    options,
    sx = {},
}) {
    const theme = useTheme();
    return (
        <Breadcrumbs
            maxItems={3}
            separator={<NavigateNextIcon color="secondary" fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ ...sx, "& ol": { flexWrap: "nowrap !important" } }}
        >
            {main && (
                <Link href={ADMIN_ROUTE}>
                    <StyledLink>
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
                        Главная
                    </StyledLink>
                </Link>
            )}
            {options?.map((e, i, arr) =>
                i !== arr.length - 1 ? (
                    <Link href={e?.link} key={new Date()}>
                        <StyledLink>
                            {e?.icon}
                            {e?.name}
                        </StyledLink>
                    </Link>
                ) : (
                    <Typography
                        sx={{
                            overflow: "hidden",
                            "text-overflow": "ellipsis",
                            display: " -moz-box",
                            "-moz-box-orient": "vertical",
                            display: "-webkit-box",
                            "-webkit-line-clamp": "1",
                            "-webkit-box-orient": "vertical",
                            "line-clamp": "1",
                            "box-orient": "vertical",
                            position: "relative",
                        }}
                        key={new Date()}
                        color={theme.palette.secondary.light}
                    >
                        {e?.name}
                    </Typography>
                )
            )}
        </Breadcrumbs>
    );
}
