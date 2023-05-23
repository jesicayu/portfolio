import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <body
        className="h-screen scrollbar-thin 
      scrollbar-thumb-custom-orange scrollbar-track-custom-orange/50  dark:bg-custom-dark-base dark:scrollbar-thumb-custom-dark-orange dark:scrollbar-track-custom-dark-orange/50"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
