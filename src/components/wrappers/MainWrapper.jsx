"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "../../theme";
import { SnackbarProvider } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { closeSnackbar } from "notistack";

const theme = createTheme(themeSettings);

export const MainWrapper = ({ children }) => {
   return (
      <ThemeProvider theme={theme}>
         <SnackbarProvider
            action={(snackbarId) => (
               <IconButton onClick={() => closeSnackbar(snackbarId)}>
                  <CloseIcon htmlColor="#fff" />
               </IconButton>
            )}
         >
            {children}
         </SnackbarProvider>
      </ThemeProvider>
   );
};
