import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Heading from '../components/general/Heading';
import CarouselBox from '../components/cats/CarouselBox';
import InfoBlock from '../components/cats/InfoBlock';
import ServiceList from '../components/ServiceList';
import CatCard from '../components/cats/CatCard';

export const getStaticProps = async() =>{
  try{
    const response_cats = await fetch('https://frost777.pythonanywhere.com/api/cats')
    const data_cats = await response_cats.json()

    const response_services = await fetch('https://frost777.pythonanywhere.com/api/service')
    const data_services = await response_services.json()


    if ((!data_cats) || (!data_services)){
      return{
        notFound: true
      }
    }

    return{
      props: {
        cats: data_cats,
        services: data_services
      }
    }
  } catch{
    return{
      props: {
        cats: null,
        services: null
      }
    }
  }
  
}

const catTitle = [
    {id:1, upload: "/assets/title.jpg"},
    {id:2, upload: "/assets/title2.jpg"}
]

const HomePage = ({cats, services})  => {
  let pk = 0
  let data = []
  while (pk <= 2) {
    data[pk] = cats[pk]
    pk += 1
  }
  return (
  <div>
    <Head>
      <title>Котики</title>
      <meta name="Cats cafe" content="Cats" />
      <link rel="icon" href="/logo.png" />
    </Head>

    <main>
      <Heading title="Главная" />
      <div className={styles.space}>
        <CarouselBox catsList={catTitle}/>
      </div>
      <InfoBlock />
      <div className={styles.general}>
        <h3 className={styles.title_small}>Узнайте больше о наших котиках</h3>
        <div className={styles.list}>
          {data.map(({id, name, upload}) => (
              <CatCard key={id} id={id} name={name} upload={upload} />
          ))}
        </div>
      </div>
      
      <ServiceList services={services}/>
      

      {/* <Photo news={news}/> */}
    </main>
  </div>
)
};

export default HomePage;