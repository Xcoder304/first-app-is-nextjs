import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const slug = () => {
  const [blogs, setblogs] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { slug } = router.query;
    let url = `http://localhost:3000/api/getBlogs?slug=${slug}`;
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        setblogs(json);
      });
  }, []);

  console.log(blogs);

  return (
    <div>
      <h1>{blogs?.title}</h1>
      <p>{blogs?.content}</p>
    </div>
  );
};

export default slug;
