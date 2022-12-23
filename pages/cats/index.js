import Head from "next/head";
import CatCard from "../../components/cats/CatCard";
import Heading from "../../components/general/Heading";
import styles from "../../styles/CatsPage.module.css"

export const getStaticProps = async() =>{
  const response = await fetch('https://frost777.pythonanywhere.com/api/cats')
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      cats: data
    }
  }
}


const CatsPage = ({cats})  => {

  return (
      <div>
        <Head>
          <title>Список котов</title>
          <meta name="Cats" content="Cats" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <main>
          <Heading title="Все котики" />

          <div className={styles.list}>
            {cats && cats.map(({id, name, upload}) => (
                <CatCard key={id} id={id} name={name} upload={upload} />
            ))}
          </div>

        </main>
      </div>
  );
};

export default CatsPage;