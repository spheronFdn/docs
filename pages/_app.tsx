import Head from "next/head";
import SpheronLogo from "../assets/favicon.ico";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={SpheronLogo.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
