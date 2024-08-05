import styles from './Menswear.module.css'
import ShopInventory from '../../utilities/shop-stock.json'
import { Link } from 'react-router-dom'
import Shop from '../Shop/Shop'

function Menswear() {

    console.log(ShopInventory)

    const menswearProducts = ShopInventory.menswear.map((item) => (
        <Link to={'/shop/menswear/' + item.id} key={item.id} className={styles.productContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.imageOne} src={item.imageOne} alt={item.title} height='220px' />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.itemTitle}>{item.title}</div>
                <span className={styles.itemPrice}>{item.price + ' eur'}</span>
            </div>
        </Link>  
    ))

    return (
        <main className={styles.main}>
            {menswearProducts}
        </main>
    )
}

export default Menswear