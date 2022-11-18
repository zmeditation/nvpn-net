import React from "react";
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/concept.css";
import "../styles/base.css";
import "../styles/banner.css";
import "../styles/footer.css";
import "../styles/servercontent.css";
import "../styles/specialoffer.css";
import "../styles/latestevents.css";
import "../styles/alert.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import SEO from "../next-seo.config";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Provider store={store}>
        <NextSeo {...SEO} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
