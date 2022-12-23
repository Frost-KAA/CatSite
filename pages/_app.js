import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "..//components/general/Layout"

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  
);

export default MyApp
