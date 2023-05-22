import Head from "next/head";
import SpheronLogo from "../assets/favicon.ico";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={SpheronLogo.src} />
        <meta
          name="description"
          content="Power your dapp with Spheron's next-generation infrastructure."
        />
        <link rel="icon" href={SpheronLogo.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
