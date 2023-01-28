import { FC, Fragment } from "react";

interface Props {
  blogList: [];
}

const BlogList: FC<Props> = ({ blogList }) => {
  return (
    <div>
      {blogList?.map((blog: { id: number; title: string; desc: string }) => {
        return (
          <Fragment key={blog?.id}>
            <h4 style={{ textAlign: "center" }}>{blog?.title}</h4>
            <p style={{ textAlign: "center" }}>{blog?.desc}</p>
          </Fragment>
        );
      })}
    </div>
  );
};

export default BlogList;
