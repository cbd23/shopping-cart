import styles from './Favorites.module.css'
import ShopInventory from "../../utilities/shop-stock.json";
import { useOutletContext, Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function Favorites() {
  const { favoriteProducts, updateFavorites } = useOutletContext();

  // flatten the ShopInventory object into a single array that contains all products &
  // filter the array to include only the products whose IDs are in 'cartProducts'
  const cartItems = Object.values(ShopInventory)
    .flat()
    .filter((product) => favoriteProducts.includes(product.id));

  return (
    <main className={styles.main}>
      <div className={styles.cartFavsSwitcher}>
        <Link to='/cart' className={styles.linkToShoppingCart}>SHOPPING CART</Link>
        <Link to='/favorites' className={styles.linkToFavs}>FAVORITES</Link>
      </div>
      <div className={styles.cartItems}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>YOU DON&apos;T HAVE ANY FAVORITE PRODUCTS YET</p>
            <br />
            <Link className={styles.visitShop} to='/shop'>VISIT SHOP</Link>
          </div>
        ) : (
          cartItems.map((product) => (
            <div key={product.id} className={styles.cartItem}>
              <img
                src={product.imageOne}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <div className={styles.productInfoLeft}>
                  <p>{product.title}</p>
                  <p>{product.price} eur</p>
                </div>
                <div className={styles.productInfoRight}>
                    <button
                    onClick={() => updateFavorites(product.id)}
                    className={styles.removeButton}
                    >
                    <Icon path={mdiClose} size={0.8} />
                    </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  )
}

export default Favorites