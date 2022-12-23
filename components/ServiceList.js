import styles from "../styles/ServiceList.module.css"

const ServiceList = ({services}) =>{

    return(
        <div className={styles.general}>
            <h3 className={styles.title}>Услуги</h3>
            <ul>
                {services.map(({id, name, price}) => (
                    <li key={id} >
                        <p>{name}: {price} рублей</p>
                    </li>
                ))}
            </ul>
            <p className={styles.time}>Режим работы: 9:00-20:00</p>
        </div>
        
    )
}

export default ServiceList;
