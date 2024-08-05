import styles from './Womenswear.module.css'
import ShopInventory from '../../utilities/shop-stock.json'
import { Link } from 'react-router-dom'

function Womenswear() {
    
    const womenswearProducts = ShopInventory.womenswear.map((item) => (
        <Link to={'/shop/womenswear/' + item.id} key={item.id} className={styles.productContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.imageOne} src={item.imageOne} alt={item.title} height='220px' />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.itemTitle}>{item.title}</div>
                <span className={styles.itemPrice}>{item.price + ' eur'}</span>
            </div>
        </Link>  
    ))

    const isMounted = true
    if (!isMounted) return <h1 className={styles.loading}>Loading...</h1>

    return (
        <main className={styles.main}>
            {womenswearProducts}
        </main>
    )
}

export default Womenswear