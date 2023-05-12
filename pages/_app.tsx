import Head from "next/head";
import SpheronLogo from "../assets/favicon.ico";

const METADATA = {
  title: "Documentation - Spheron",
  description: "Power your dapp with Spheron's next-generation infrastructure.",
  url: "https://docs.spheron.network/",
  image: "https://spheron.network/metaimage-1.png?version=1",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={SpheronLogo.src} />
        <meta name="description" content={METADATA.description} />
        <link rel="icon" href={SpheronLogo.src} />

        <meta itemProp="name" content={METADATA.title} />
        <meta itemProp="description" content={METADATA.description} />
        <meta itemProp="image" content={METADATA.image} />

        <meta property="og:url" content={METADATA.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={METADATA.title} />
        <meta property="og:description" content={METADATA.description} />
        <meta property="og:image" content={METADATA.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={METADATA.title} />
        <meta name="twitter:description" content={METADATA.description} />
        <meta name="twitter:image" content={METADATA.image} />
        <link rel="canonical" href={METADATA.url} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={METADATA.title} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
