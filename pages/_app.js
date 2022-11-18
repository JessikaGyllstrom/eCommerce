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
      <script
        src="https://cdn.Snipcart.com/themes/v3.2.1/default/Snipcart.js"
        async
      />
      <div
        id="Snipcart"
        data-api-key="MTU3OWRlODEtYzY3Zi00MDcxLTg5NWUtMDUxMWQ0ZWE2YzllNjM4MDQxODY1MDY5NTQ0MzYw"
        hidden
      ></div>
      </>
  )
}
