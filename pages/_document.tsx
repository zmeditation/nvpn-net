import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
            rel="stylesheet"
          ></link>
          <link
          rel="stylesheet"
          id="ct-google-fonts-css"
          href="//fonts.googleapis.com/css?family=Montserrat%3A500%2Cregular%2C300%2C700%2C200%7COpen+Sans%3A300%2C700&#038;subset=latin%2Clatin-ext%2Cvietnamese%2Ccyrillic-ext%2Ccyrillic%2Cgreek%2Cgreek-ext&#038;ver=4.9.8"
          type="text/css"
          media="all"
        />
          {/* <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet"></link> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/custom.js" type="text/javascript" async/>
          {/* <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js?ver=1.9.1' async></script>  */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenLite.min.js" async></script> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/easing/EasePack.min.js" async></script> */}
          {/* <script type='text/javascript' src='resources/scripts/bg-animation.js' async></script> */}
          {/* <script src="/js/animationCursor.js" type="text/javascript" async/> */}
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
