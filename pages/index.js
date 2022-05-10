import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3000/api/allBlogs";
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        setblogs(json);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Frist-Project</title>
        <meta
          name="description"
          content="This is my first next js paratice-project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fist Pro</h1>
        <h2>My First Next js Project</h2>

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
