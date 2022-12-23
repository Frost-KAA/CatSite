import Head from "next/head";
import CatInfo from "../../components/cats/CatInfo";


export const getServerSideProps = async(context) =>{
  const {id} = context.params;
  const response = await fetch(`https://frost777.pythonanywhere.com/api/cats/${id}`)
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      cat: data
    }
  }
}

const CatPage = ({cat})  => (
    <div>
      <Head>
        <title>Информацию о питомце</title>
        <meta name="Cat" content="Cat" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <CatInfo cat={cat} />
    </div>
);

export default CatPage;