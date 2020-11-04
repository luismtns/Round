import "../styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "./../components/Navbar";
import "animate.css/animate.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Round - #CadaGrãoImporta</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
