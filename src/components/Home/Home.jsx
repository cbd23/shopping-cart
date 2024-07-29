// eslint-disable-next-line no-unused-vars
import styles from "./Home.module.css";

import { Link } from "react-router-dom";

function Home() {
  return (
      <main className={styles.main}>
        <h1 className={styles.heading}>Welcome to <span className={styles.logoOnText}>BADILA&apos;s</span>.</h1>
        <p className={styles.para}>Discover our latest products, whether you&apos;re looking for clothes, jewelry or electronics.<br /><br />Free shipping for orders over $100.</p>
        <Link to='/shop'>
          <button className={styles.shopNowBtn}>Shop Now</button>
        </Link>
        
        
      </main>
  );
}

export default Home;
