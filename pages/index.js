import React from "react";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
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
            <Link href="/viewblog">
              <a>
                <li>
                  <h4>learn next js </h4>
                  <p>
                    fnbsfnblsjbnjsnlbnslnblnsfnbnsdbnlsjnblnslbnlsnblsnlbnlsn
                  </p>
                  <span>1-5 mouth</span>
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </main>
    </div>
  );
}
