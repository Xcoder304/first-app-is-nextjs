import "../styles/globals.css";
import Navbar from "./Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frist-Project</title>
        <meta
          name="description"
          content="This is my first next js paratice-project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
