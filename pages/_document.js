import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="A landing page built with Next.js, TailwindCSS, and ShadCN." />
        <meta name="keywords" content="Next.js, TailwindCSS, ShadCN, Landing Page" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
