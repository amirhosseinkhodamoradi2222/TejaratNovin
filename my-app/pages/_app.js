import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/page";
import { NextSeo } from "next-seo";
import icon from "../assets/image/logo.jpeg";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo themeColor="#1D2241" />
      <Head>

      <link rel="shortcut icon" href={icon} />
      </Head>
      <div className="fonts bg-backgroundColor">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;