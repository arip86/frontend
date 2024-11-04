import styles from "./Navbar.module.css";

function Navbar (){
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
        <div>
        <h1 className={styles.navbar__brand}>Navbar</h1>
        </div>
        <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>Home</li>
        <li className={styles.navbar__item}>Add Movie</li>
        <li className={styles.navbar__item}>Popular</li>
        <li className={styles.navbar__item}>Now Playing</li>
        </ul>
            </nav>
        </div>
    )
}
export default Navbar;

