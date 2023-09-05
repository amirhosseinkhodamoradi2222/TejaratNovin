import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/page";
import { NextSeo } from "next-seo";
import icon from "../assets/image/logo.jpeg";
import Head from "next/head";
import "swiper/css";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading/Loading";

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 100);
  }, []);

  return (
    <>
      <NextSeo themeColor="#1D2241" />
      <Head>
        <link rel="shortcut icon" href={icon} />
      </Head>
      <div className="fonts bg-backgroundColor">
        <Navbar />
        {isLoading ? <Loading /> : <p>sdfds</p>}
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
