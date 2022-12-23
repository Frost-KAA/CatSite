import Card from 'react-bootstrap/Card';
import styles from "../../styles/CatCard.module.css"
import Link from 'next/link';

const CatCard = ({id, name, upload}) => (
    <Card key={id} className={styles.general} style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={upload} height={250} width={250}/>
      <Card.Body>
        <Link href={`/cats/${id}`} legacyBehavior>
          <a className={styles.a}><Card.Title className={styles.title}>{name}</Card.Title></a>
        </Link>
      </Card.Body>
    </Card>
);

export default CatCard;