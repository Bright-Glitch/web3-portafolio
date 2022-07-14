import Layout from '../components/Layout'
import Router from 'next/router'
import '../styles/globals.css'
import { DappProvider } from '../context/DappContext'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import NProgress from "nprogress"

function MyApp({ Component, pageProps }) {
  
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (

    <DappProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </DappProvider>
  )
}

export default MyApp
