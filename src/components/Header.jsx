"use client";
import { Button, Menu, MenuItem, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";
import { ContainerComponent } from "./wrappers/ContainerComponent";
import Image from "next/image";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import Link from "next/link";
import { MAIN_ROUTE } from "../configs/routerLinks";
import { Children, useState } from "react";
import GoogleTranslate from "./google-translate";

const Header = ({ data }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const menu = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <Box
            position={"fixed"}
            top={0}
            left={0}
            width={"100%"}
            zIndex={1000}
            sx={{
                background: theme.palette.primary.dark,
            }}
        >
            <ContainerComponent sx={{ p: { xs: 0 } }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    <Link href={MAIN_ROUTE}>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={2}
                            pt={2}
                            pb={2}
                        >
                            <Image
                                alt="logo"
                                width={40}
                                height={50}
                                src={"/logo1.png"}
                            />
                            <Image
                                alt="logo1"
                                width={60}
                                height={60}
                                src={"/logo1_1.png"}
                            />
                            <Image
                                alt="logo2"
                                width={60}
                                height={60}
                                src={"/logo2.png"}
                            />
                        </Box>
                    </Link>
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        gap={1}
                    >
                        {data && data?.length !== 0 ? (
                            <>
                                <Button
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={
                                        menu ? "long-menu" : undefined
                                    }
                                    aria-expanded={menu ? "true" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    startIcon={<PhoneForwardedIcon />}
                                    variant="outlined"
                                    color="secondary"
                                    // onClick={logOut}
                                >
                                    центр связи
                                </Button>
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
                                    {data?.map((e, i) => (
                                        <Link
                                            key={i + new Date()}
                                            href={"tel:" + e.number}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                {e.number}
                                            </MenuItem>
                                        </Link>
                                    ))}
                                </Menu>
                            </>
                        ) : (
                            ""
                        )}
                        <GoogleTranslate />
                    </Box>
                </Toolbar>
            </ContainerComponent>
        </Box>
    );
};

export default Header;
