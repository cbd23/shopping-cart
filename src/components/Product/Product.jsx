import { useState } from "react";
import styles from './Product.module.css'
import ShopInventory from '../../utilities/shop-stock.json'
import { useParams, useOutletContext } from 'react-router-dom'

import Icon from '@mdi/react';
import { mdiHeart, mdiHeartOutline } from '@mdi/js';

function Product() {

    const [displayedImage, setDisplayedImage] = useState('first')

    // destructure passed context in order to use it
    const { favoriteProducts, updateFavorites, cartProducts, updateCart } = useOutletContext()

    // access Product's parameters to get its 'id' & 'category'
    const param = useParams()
    const selectedProductId = Number(param.productId)
    const selectedCategory = param.category

    // define the target using 'id' & 'category' - this helps displaying the right info about each product
    const target = ShopInventory[selectedCategory].find(item => item.id === selectedProductId)

    // create a switcher function for the main image that's being displayed
    function switchImage(number) {
        setDisplayedImage(number)
    }

    return (
        <main className={styles.main}>
            <div className={styles.emptyContainer}></div>
            <div className={styles.imagesContainer}>
                <div className={styles.mainImageContainer}>
                    <img className={styles.mainImage} src={ displayedImage === 'first' ? target.imageOne : target.imageTwo} alt={target.title} width='80%' />
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.availableImagesContainer}>
                    <img onClick={() => switchImage('first')} className={styles.imageOne} src={target.imageOne} alt={'picture of ' + target.title} width='20%' />
                    <img onClick={() => switchImage('second')} className={styles.imageTwo} src={target.imageTwo} alt={'picture of ' + target.title + ' seen from behind'} width='20%'/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.topInfo}>
                        <div className={styles.firstRow}>
                            <div className={styles.productTitle}>{target.title}</div>
                            <div onClick={() => updateFavorites(selectedProductId)} className={styles.favoritesBtn}>
                                <Icon path={favoriteProducts.includes(selectedProductId) ? mdiHeart : mdiHeartOutline } size={1} />
                            </div>
                        </div>
                        <div className={styles.productPrice}>{target.price} eur</div>
                    </div>
                    <div className={styles.productDescription}>{target.description}</div>
                    <div className={styles.productDisclaimer}>CHECK IN-STORE AVAILABILITY<br /><br />SHIPPING, EXCHANGES AND RETURNS</div>
                    <div onClick={() => updateCart(selectedProductId)} className={styles.buttonsContainer}>
                        <div>{cartProducts.includes(selectedProductId) ? 'REMOVE FROM CART' : 'ADD TO CART'}</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Product