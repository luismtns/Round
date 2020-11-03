// import "bootstrap/dist/css/bootstrap.css";

import "../styles/index.scss";
import type { AppProps /*, AppContext */ } from "next/app";
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

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
