// eslint-disable-next-line no-unused-vars
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

import AutoPlayMethods from "../../utilities/AutoPlayMethods/AutoPlayMethods";

function Home() {

  return (
      <main className={styles.main}>
        <h1 className={styles.heading}>Welcome to <span className={styles.logoOnText}>BADILA&apos;s</span>.</h1>
        <p className={styles.para}>Dress to impress. Dress to express. Dress to whatever... or don&apos;t even dress.<br /><br />Free shipping for orders over 100 eur.</p>
        <Link to='/shop'>
          <button className={styles.shopNowBtn}>Shop Now</button>
        </Link>
        <div className={styles.carouselContainer}>
          <AutoPlayMethods />
        </div>
      </main>
  );
}

export default Home;
