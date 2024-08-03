import styles from './Shop.module.css'
import { Outlet, Link } from 'react-router-dom'


function Shop() {
    return (
        <main className={styles.main}>
          <div className={styles.womenswear}>
            <Link to='/shop/womenswear' className={styles.linkToWomenswear}>
              <div className={styles.imageContainerWomen}>
                <img className={styles.heroImage} src="https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/hero-images/woman.jpg" alt="womenswear products page" width='90%' />
              </div>
            </Link>
          </div>
          <div className={styles.menswear}>
            <Link to='/shop/menswear' className={styles.linkToMenswear}>
              <div className={styles.imageContainerMen}>
                <img className={styles.heroImage} src="https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/hero-images/man.jpg" alt="menswear products page" width='90%' />
              </div>
            </Link>
          </div>
          <div className={styles.kidswear}>
            <Link to='/shop/kidswear' className={styles.linkToKidswear}>
              <div className={styles.imageContainerKids}>
                <img className={styles.heroImage} src="https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/hero-images/kid.jpg" alt="menswear products page" width='90%' />
              </div>
            </Link>
          </div>
        </main>
    )
}

export default Shop