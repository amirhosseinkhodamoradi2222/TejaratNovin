import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/page'

function MyApp({ Component, pageProps }) {
  return (
    <div className="fonts">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
