// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import styles from './ProductSlide.module.css'
import PropTypes from 'prop-types'

function ProductSlide({ img, title, price, link }) {

    return (
        <Link to={link}>
            <div className={styles.slideContainer}>
                <div className={styles.productContainer}>
                    <div className={styles.imageContainer}>
                        <img className={styles.sliderProdImage} src={img} width='70%' alt={title} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.sliderProdTitle}>{title}</div>
                        <div className={styles.sliderProdPrice}>{price + ' eur'}</div>
                    </div>
                </div>
            </div>
        </Link> 
    )
}

ProductSlide.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired
}

export default ProductSlide