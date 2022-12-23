import Heading from "../general/Heading"
import styles from "../../styles/CatInfo.module.css"

const CatInfo = ({cat}) =>{
    if (!cat){
        return <Heading title="Информация о котике не найдена"/>
    }

    return(
        <main>
            <Heading title={cat.name} />
            <div className={styles.general}>
                <p><i>{cat.desc}</i></p>
                <p>Возраст: {cat.year}</p>
                <img src={cat.upload} width="200" height="200" alt="news_img"/>
                <p className={styles.down}>{cat.name} уже ждет встречи с вами!</p>
            </div>
        </main>
        
    )
}

export default CatInfo;
