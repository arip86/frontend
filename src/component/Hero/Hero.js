import styles from "./Hero.module.css";
function Hero(){
    return(
<div className={styles.container}>
<section className={styles.hero}>
    <div className={styles.hero__left}>
        <h2 className={styles.hero__title}>Spiderman</h2>
        <h3 className={styles.hero__genre}>Genre: Thriller, Drama, Romance</h3>
      <p className={styles.hero__description}>
      Lorem Ipsum is simply dummy text 
      of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>  
    <button className={styles.hero__button}>Watch</button>
    </div>
    <div>
        <img className={styles.hero__image}
        src="https://picsum.photos/200/300/"
        />
    </div>
</section>
</div>
    )
}

export default Hero;