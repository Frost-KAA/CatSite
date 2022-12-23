import Carousel from "react-bootstrap/Carousel"
import styles from "../../styles/CarouselBox.module.css"
import Link from "next/link";

const CarouselBox = ({catsList}) => (
   <Carousel>
        {catsList.map(({id, upload}) => (
            <Carousel.Item key={id}>
                <img
                    className="d-block w-100"
                    src={upload}  
                    alt="cats"
                    height={400}
                />
                <Carousel.Caption className={styles.desc}>
                    <Link href={"/price"} legacyBehavior><a className={styles.a}><h2 style={{padding:0}}>Котокафе Помурррчим</h2></a></Link>
                    <p>Пушистые обитатели котокафе ждут вас в гости</p>
                </Carousel.Caption>
                
            </Carousel.Item>
        ))}
   </Carousel>
);

export default CarouselBox;