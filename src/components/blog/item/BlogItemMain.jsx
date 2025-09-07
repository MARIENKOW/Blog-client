import style from "./BlogItem.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid2 as Grid } from "@mui/material";
import Link from "next/link";
import { BLOG_ROUTE } from "../../../configs/routerLinks";

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
            <CardContent className={style.text} sx={{ flex: "1" }}>
               <Grid spacing={2} sx={{ mb: "20px" }} container columns={10}>
                  <Grid size={{ xs: 10, sm: 5 }}>
                     <CardMedia
                        sx={{ minHeight: 180, width: "100%",aspectRatio:2/1 }}
                        image={Blog?.img?.path || "../default.png"}
                        title="BlogImage"
                     />
                  </Grid>
                  <Grid
                     size={{ xs: 10, sm: 5 }}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <Typography
                        sx={{ maxWidth: "400px" }}
                        fontWeight={'700'}
                        gutterBottom
                        variant="h4"
                        component="div"
                     >
                        {Blog?.title}
                     </Typography>
                  </Grid>
               </Grid>
               <Typography
                  component={"div"}
                  dangerouslySetInnerHTML={{ __html: Blog?.body }}
                  variant="body2"
                  color="text.secondary"
                  sx={{ maxHeight: "150px", overflow: "hidden" }}
               />
            </CardContent>
         </Card>
      </Link>
   );
};

export default BlogItemUser;
