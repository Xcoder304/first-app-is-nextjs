import React, { useState } from "react";
// import Image from "next/image";
import * as fs from "fs";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home(props) {
  const [blogs, setblogs] = useState(props.allBlogs);

  // useEffect(() => {
  //   let url = "http://localhost:3000/api/allBlogs";
  //   fetch(url)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((json) => {
  //       setblogs(json);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>welcome to Fist Pro</h1>
        <h2>Top 3 blogs</h2>

        <div className={styles.blogs}>
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
      </main>
    </div>
  );
}

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
  for (let i = 0; i < 3; i++) {
    let item = data[i];
    files = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allBlogs.push(JSON.parse(files));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
