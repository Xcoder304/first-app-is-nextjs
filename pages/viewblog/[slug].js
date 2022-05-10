import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const slug = (props) => {
  const [blogs, setblogs] = useState(props.Blog);
  // const router = useRouter();

  // useEffect(() => {
  //   const { slug } = router.query;
  //   let url = `http://localhost:3000/api/getBlogs?slug=${slug}`;
  //   fetch(url)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((json) => {
  //       setblogs(json);
  //     });
  // }, []);

  return (
    <div style={{ padding: "15px 6%" }}>
      <h1 style={{ padding: "16px 0", textTransform: "capitalize" }}>
        {blogs?.title}
      </h1>
      <p style={{ lineHeight: "30px" }}>{blogs?.content}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  let { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`);
  let Blog = await data.json();

  return {
    props: { Blog }, // will be passed to the page component as props
  };
}

export default slug;
