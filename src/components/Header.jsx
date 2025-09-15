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
import { useState } from "react";

const Header = () => {
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
                            <Image width={40} height={50} src={"/logo1.png"} />
                            <Image width={60} height={60} src={"/logo.png"} />
                        </Box>
                    </Link>
                    <Button
                        aria-label="more"
                        id="long-button"
                        aria-controls={menu ? "long-menu" : undefined}
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
                        <Link href={'tel:+9282342982449'}>
                            <MenuItem onClick={handleClose}>
                                +9282342982449
                            </MenuItem>
                        </Link>
                        <Link href={'tel:+9282342982449'}>
                            <MenuItem onClick={handleClose}>
                                +9282342982449
                            </MenuItem>
                        </Link>
                        <Link href={'tel:+9282342982449'}>
                            <MenuItem onClick={handleClose}>
                                +9282342982449
                            </MenuItem>
                        </Link>
                    </Menu>
                </Toolbar>
            </ContainerComponent>
        </Box>
    );
};

export default Header;
