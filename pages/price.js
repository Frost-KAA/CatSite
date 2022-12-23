import Head from "next/head";
import Heading from "../components/general/Heading";
import Service from "../components/Service";
import styles from "../styles/Price.module.css"

export const getStaticProps = async() =>{

  const response_service = await fetch('https://frost777.pythonanywhere.com/api/service')
  const data_service = await response_service.json()

  if (!data_service){
    return{
      notFound: true
    }
  }

  return{
    props: {
      services: data_service
    }
  }
}

const PricePage = ({services})  => (
    <div>
      <Head>
        <title>Цены</title>
        <meta name="Price" content="Price" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Heading title="Цены"/>
        <Service services={services} />
        
        <p className={styles.address}>Мы ждем вас по адресу: Гайдара 14</p>
      </main>
    </div>
);

export default PricePage;