import { useState, useEffect } from 'react'
import styles from './Womenswear.module.css'
import ShopInventory from '../../utilities/shop-stock.json'
import { Link } from 'react-router-dom'

function Womenswear() {
    const [imagesLoaded, setImagesLoaded] = useState(false)

    useEffect(() => {
        const imagePromises = ShopInventory.womenswear.map(item => {
            return new Promise((res, rej) => {
                const img = new Image()
                img.src = item.imageOne
                img.onload = res
                img.onerror = rej
            })
        })

        Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch(err => console.error('Error loading images', err))
    }, [])

    if (!imagesLoaded) {
        return <h1>Loading womenswear products...</h1>
    }

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

    return (
        <main className={styles.main}>
            {womenswearProducts}
        </main>
    )
}

export default Womenswear