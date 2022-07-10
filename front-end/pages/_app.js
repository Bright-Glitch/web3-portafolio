import Layout from '../components/Layout'
import '../styles/globals.css'
import { DappProvider } from '../context/DappContext'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function MyApp({ Component, pageProps }) {
  return (

    <DappProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </DappProvider>
  )
}

export default MyApp
