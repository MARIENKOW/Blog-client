import { Box, Typography } from "@mui/material";

export default function WithTitleWrapper({ title, children }) {
   return (
      <>
         <Box mt={10}>
            <Typography
               textAlign={"center"}
               fontWeight={"600"}
               mb={8}
               variant="h3"
               flex={1}
               display={'flex'}
               flexDirection={'column'}
               color="secondary.main"
               sx={{ fontSize: { xs: "34px", md: "42px" } }}
            >
               {title}
            </Typography>
            {children}
         </Box>
      </>
   );
}
