import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/page'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
