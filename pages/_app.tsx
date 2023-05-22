import Head from "next/head";
import SpheronLogo from "../assets/favicon.ico";

const METADATA = {
  title: "Spheron Documentation",
  description: "Power your dapp with Spheron's next-generation infrastructure.",
  url: "https://docs.spheron.network/",
  image: "https://spheron.network/metaimage-1.png?version=1",
};

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
        <meta itemProp="image" content={METADATA.image} />

        <meta property="og:url" content={METADATA.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={METADATA.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
