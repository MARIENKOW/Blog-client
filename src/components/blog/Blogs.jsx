"use client";

import { useEffect, useState } from "react";
import BlogService from "../../services/BlogService";
import Loading from "../loading/Loading";
import { Empty } from "../Empty";
import ErrorElement from "../ErrorElement";
import { Box } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { enqueueSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import BlogItem from "./item/BlogItem";

const blog = new BlogService();

export default function Blogs() {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [error, setError] = useState(false);
   const [openBackdrop, setOpenBackdrop] = useState(false);

   async function getAllBlogs() {
      try {
         const { data } = await blog.getAll();
         setData(data);
      } catch (error) {
         setError(error);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      getAllBlogs();
   }, []);

   if (loading) return <Loading />;

   if (error) return <ErrorElement message={error} />;

   if (!data || data?.length === 0) return <Empty />;

   const handleClickDelite = async (id, name ) => {
      const agree = window.confirm(
         `Вы уверены, что хотите удалить \n "${name}" ?`
      );
      if (!agree) return;
      setOpenBackdrop(true);
      try {
         await blog.delete(id);
         enqueueSnackbar(`Новость "${name}" удалено`, {
            variant: "success",
         });
         try {
            await getAllBlogs();
         } catch (e) {
            console.dir(e);
            enqueueSnackbar("Упс! что-то пошло не так. Перезагрузите страницу", {
               variant: "error",
            });
         }
      } catch (e) {
         console.dir(e);
         enqueueSnackbar("Упс! что-то пошло не так", { variant: "error" });
      } finally {
         setOpenBackdrop(false);
      }
   };

   console.log(data);

   return (
      <Box display={"flex"} flexDirection={"column"} gap={1}>
         {data.map((Blog) => (
            <BlogItem
               deletePost={handleClickDelite}
               Blog={Blog}
               key={Blog?.id}
            />
         ))}
         <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBackdrop}
         >
            <CircularProgress />
         </Backdrop>
      </Box>
   );
}
