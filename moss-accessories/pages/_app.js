// pages/_app.js
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Default Title</title>
        {/* For .ico */}
        
        {/* For PNG */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* For SVG */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
