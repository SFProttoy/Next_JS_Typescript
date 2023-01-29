import { GetStaticProps } from "next";
import BlogList from "../components/BlogList";

interface IBlog {
  blogList: [];
}

const Blogs = ({ blogList }: IBlog) => {
  return (
    <>
      <BlogList blogList={blogList} />
    </>
  );
};

export default Blogs;

type Blogs = [
  {
    id: number;
    title: string;
    desc: string;
  }
];

export const getStaticProps: GetStaticProps<{
  blogList: Blogs;
}> = async () => {
  const res = await fetch("http://localhost:4000/blogs");
  const blogList: Blogs = await res.json();

  return {
    props: {
      blogList,
    },
  };
};
