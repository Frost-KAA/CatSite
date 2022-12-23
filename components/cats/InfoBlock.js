import styles from "../../styles/InfoBlock.module.css"

const InfoBlock = () =>{
    return(
        <>
        <div className={styles.general}>
            <div className={styles.info}>
                <div className={styles.text}> 
                    <h3 className={styles.title}>Счастье - в котах</h3>
                    <p>Вы открываете дверь в котокафе, а вас встречает несколько кошек — две, три, а может быть и пять! Они терпеливо ждут, пока вы найдете хорошее место и сядете, чтобы удобно устроиться на ваших коленях.</p>
                    <p>Расслабьтесь, гладьте теплых и пушистых котов, наблюдайте за их играми и слушайте доброе мурчание.</p>
                </div>
                <img src="assets/info1.jpg" className={styles.cat_round} alt="info" />
            </div>
        </div>
        <div className={styles.general}>
            <div className={styles.info}>
                <img src="assets/info2.jpg" className={styles.cat_round} alt="info" />
                <div className={styles.text}> 
                    <h3 className={styles.title}>Коты - цветы жизни</h3>
                    <p>Приходите в котейню с детьми! Взрослые давно разучились играть. А дети — совсем другое дело, они играют увлеченно и азартно, котам это нравится.</p>
                    <p>В котокафе можно на время оставить детей, пока родители гуляют по магазинам и занимаются взрослыми делами.</p>
                    <p>Здесь ребенок научится общаться с кошками, уважать наших братьев меньших и сможет понять, что животные — не игрушки. Эти знания пригодятся, если вы решите завести кота.</p>
                </div>
            </div>
        </div>
        <div className={styles.general}>
            <div className={styles.info}>
                <div className={styles.text}> 
                    <h3 className={styles.title}>Коты с собой</h3>
                    <p>Если вы найдете родственную кошачью душу, то сможете забрать пушистого друга с собой. Котокафе — временный дом для тех, кто остался без хозяина и крова. Вы сможете подарить кому-то из них любовь и настоящий дом.</p>
                </div>
                <img src="assets/info3.jpg" className={styles.cat_round} alt="info" />
            </div>
        </div>
        </>
    )
}

export default InfoBlock;
