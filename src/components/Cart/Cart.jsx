import styles from "./Cart.module.css";
import ShopInventory from "../../utilities/shop-stock.json";
import { useOutletContext, Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function Cart() {
  const { cartProducts, updateCart } = useOutletContext();

  // flatten the ShopInventory object into a single array that contains all products &
  // filter the array to include only the products whose IDs are in 'cartProducts'
  const cartItems = Object.values(ShopInventory)
    .flat()
    .filter((product) => cartProducts.includes(product.id));

  return (
    <main className={styles.main}>
      <div className={styles.cartFavsSwitcher}>
        <Link to='/cart' className={styles.linkToShoppingCart}>Shopping cart</Link>
        <Link to='/favorites' className={styles.linkToFavs}>Favorites</Link>
      </div>

      <div className={styles.cartItems}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
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
                    onClick={() => updateCart(product.id)}
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

export default Cart