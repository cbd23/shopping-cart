import { useEffect, useState } from "react";
import styles from './Product.module.css'
import ShopInventory from '../../utilities/shop-stock.json'
import { useParams } from 'react-router-dom'

import Icon from '@mdi/react';
import { mdiHeart, mdiHeartOutline } from '@mdi/js';

function Product() {

    const [displayedImage, setDisplayedImage] = useState('first')
    const [favorite, setFavorite] = useState(false)

    // access Product's parameters in order to get 'id' & 'category'
    const param = useParams()
    const selectedProductId = Number(param.productId)
    const selectedCategory = param.category

    // define the target using 'id' & 'category'
    const target = ShopInventory[selectedCategory].find(item => item.id === selectedProductId)

    // create a switcher for the main image that's being displayed
    function switchImage(number) {
        setDisplayedImage(number)
    }

    function switchFavorite() {
        let prevValue = favorite
        setFavorite(!prevValue)
    }

    useEffect(() => {
        console.log(favorite)
    }, [favorite])

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
                            <div onClick={() => switchFavorite()} className={styles.favoritesBtn}>
                                <Icon path={favorite === false ? mdiHeartOutline : mdiHeart} size={1} />
                            </div>
                        </div>
                        <div className={styles.productPrice}>{target.price} eur</div>
                    </div>
                    <div className={styles.productDescription}>{target.description}</div>
                    <div className={styles.productDisclaimer}>CHECK IN-STORE AVAILABILITY<br /><br />SHIPPING, EXCHANGES AND RETURNS</div>
                    <div className={styles.buttonsContainer}>
                        <div>ADD TO CART</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Product