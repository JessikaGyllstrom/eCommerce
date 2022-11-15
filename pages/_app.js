import '../styles/globals.css';
import '../styles/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import   Head  from 'next/head';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/css/bootstrap.min.css");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      </>
  )
}
