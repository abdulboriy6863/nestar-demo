import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log(" DOCUMENT PAGE Router");

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        {/* SEO */}
        <meta
          name="keyword"
          content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}
        />
        <meta
          name="description"
          content={
            "Buy and sell properties anywere anytime in South Korea. | " +
            "Покупайте и продавайте недвижимость в любое время и в любом месте в Южной Корея | " +
            "언제 어디서나 대한민국에서 부동산을 사고파십시오"
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} //mahsus vazifani bajaradigon file ceo ni hosil qilishim uchun yordamga keladi
