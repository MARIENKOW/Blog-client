"use client";

import { Box, createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "../../theme";
import { SnackbarProvider } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { closeSnackbar } from "notistack";
import GlobalLoader from "./GlobalLoader";

const theme = createTheme(themeSettings);

export const MainWrapper = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box display={'flex'} flexDirection={'column'} flex={1}  >
                <SnackbarProvider
                    action={(snackbarId) => (
                        <IconButton onClick={() => closeSnackbar(snackbarId)}>
                            <CloseIcon htmlColor="#fff" />
                        </IconButton>
                    )}
                >
                    <GlobalLoader>{children}</GlobalLoader>
                </SnackbarProvider>
            </Box>
        </ThemeProvider>
    );
};
