"use client";

import { Box, useTheme } from "@mui/material";
import { ContainerComponent } from "./wrappers/ContainerComponent";

export const Map = () => {
    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: theme.palette.primary.contrastText }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.756404776665!2d34.8988975!3d31.967504599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502cae44210920d%3A0x5be5b0f55288efa2!2sLahav%20433!5e0!3m2!1suk!2sua!4v1760005973134!5m2!1suk!2sua"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </Box>
    );
};
