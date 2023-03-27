import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const element = document.getElementsByClassName("nx-text-sm")[0];
    element.classList.add("nx-text-gray-100");
    element.classList.add("dark:nx-text-gray-100");
    element.classList.add("nx-rounded-lg");
    element.classList.add("nx-px-4");
    element.classList.add("nx-mx-2");
    element.setAttribute("style", "background-color: #0057FF;");
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
      </Head>
      <main style={{ fontFamily: "Gilroy, sans-serif" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
