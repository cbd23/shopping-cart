import styles from './Product.module.css'
import ShopInventory from '../../utilities/shop-stock.json'
import PropTypes from 'prop-types'
import { useOutletContext } from 'react-router-dom'


function Product() {

    const context = useOutletContext()

    return (
        // <div>{context.currentProduct}</div>
        <main className={styles.main}>
            <div className={styles.emptyContainer}></div>
            <div className={styles.imagesContainer}>
                <div className={styles.mainImageContainer}>
                    <img className={styles.mainImage} src="https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/shop-stock/menswear/men-t-shirt.jpg" alt="" width='80%' />
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.availableImagesContainer}>
                    <img className={styles.imageOne} src="https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/shop-stock/menswear/men-t-shirt.jpg" alt="" width='20%' />
                    <img className={styles.imageTwo} src="https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/shop-stock/menswear/men-t-shirt-back.jpg" alt="" width='20%'/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.topInfo}>
                        <div className={styles.productTitle}>TITLE OF THE PRODUCT</div>
                        <div className={styles.productPrice}>43.95 eur</div>
                    </div>
                    <div className={styles.productDescription}>Lorem ipsum goes right here ipsum goes right here ipsum goes right here ipsum goes right here ipsum goes right here.</div>
                    <div className={styles.productDisclaimer}>CHECK IN-STORE AVAILABILITY<br /><br />SHIPPING, EXCHANGES AND RETURNS</div>
                    <div className={styles.buttonsContainer}>
                        <div>ADD TO CART</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

Product.propTypes = {
    currentProduct: PropTypes.number
}

export default Product