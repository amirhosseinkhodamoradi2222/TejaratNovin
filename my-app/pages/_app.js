import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/page";

function MyApp({ Component, pageProps }) {
  return (
    <div className="fonts bg-backgroundColor">
      <Navbar />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
