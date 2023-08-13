import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/page";

function MyApp({ Component, pageProps }) {
  return (
    <div className="fonts bg-backgroundColor">
      <Navbar />
      <div className="container mx-auto">
        <div className="mx-4 lg:mx-0 md:mx-2">
        <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
