
import BlogService from "../../services/BlogService";
import ErrorElement from "../../components/ErrorElement";
import { Empty } from "../../components/Empty";

import WithTitleWrapper from "../../components/wrappers/WithTitleWrapper";
import { BlogsUser } from "../../components/blog/BlogsUser";

export const dynamic = "force-dynamic";

const blog = new BlogService();

export default async function Page() {
   try {
      const { data } = await blog.getAll();

      if (!data?.data || data?.data?.length === 0)
         return (
            <WithTitleWrapper title={"Новости Израиля"}>
               <Empty />
            </WithTitleWrapper>
         );

      return (
        <BlogsUser data={data}/>
      );
   } catch (error) {
      console.log(error);
      return (
         <WithTitleWrapper title={"Новости Израиля"}>
            <ErrorElement />
         </WithTitleWrapper>
      );
   }
}
