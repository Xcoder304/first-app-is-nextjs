import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [val, setval] = React.useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {val ? "This is My Frist Nextjs Project" : "Frist-Project"}
        </title>
        <meta
          name="description"
          content="This is my first next js paratice-project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fist Pro</h1>
        <h2>My First Next js Project</h2>
        <Image src="/vercel.svg" width={200} height={200} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
