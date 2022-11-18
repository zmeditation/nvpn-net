import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import "../i18n";
import Concept from "../components/Concept/Concept";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/footer";
import ServerContent from "../components/ServerContent/ServerContent";
import SpecialOffer from "../components/SpecialOffer/SpecialOffer";
import LatestEvents from "../components/LatestEvents/LatestEvents";
import { useTranslation } from "react-i18next";
import Alert from "../components/Base/Alert";
import { Server } from "http";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("Welcome To Unicial")}</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <meta
          name="description"
          content="Quality server and fastest connection. NO setup or other hidden fees; Instant automatic Setup after payment; Unblock Skype, poker and adult websites;"
        />
        <meta
          name="keywords"
          content="nVpn"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>
      <Header />
      <Banner />
      <Concept />
      <ServerContent />
      <SpecialOffer />
      <LatestEvents />
      <Footer />
      <Alert />
    </div>
  );
};

export default Home;
