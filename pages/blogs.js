import { useState } from "react";
import styles from "../styles/blogs.module.css";
import Link from "next/dist/client/link";
import * as fs from "fs";

const Blogs = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs);
  return (
    <div className={styles.blogs}>
      <h1 className={styles.blogsTitle}>Blogs</h1>
      <ul>
        {blogs.map(({ title, content, slug }, index) => {
          return (
            <Link href={`/viewblog/${slug}`} key={index}>
              <a>
                <li>
                  <h4>{title}</h4>
                  <p>{content?.substr(0, 150)}...</p>
                </li>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/allBlogs");
//   let allBlogs = await data.json();

//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   };
// }

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata", "utf-8");
  let files;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    files = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allBlogs.push(JSON.parse(files));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blogs;
