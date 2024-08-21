import styles from "./Cart.module.css"
import ShopInventory from "../../utilities/shop-stock.json"
import { useOutletContext, Link } from "react-router-dom"
import Icon from "@mdi/react"
import { mdiClose } from "@mdi/js"

function Cart() {
  const { cartProducts, updateCart, setCartProducts } = useOutletContext()

  // flatten the ShopInventory object into a single array that contains all products &
  // filter the array to include only the products whose IDs are in 'cartProducts'
  const cartItems = Object.values(ShopInventory)
    .flat()
    .filter((product) => cartProducts.includes(product.id))

  // calculate the total value of the shopping cart
  const totalCartValue = cartItems.reduce((sum, product) => sum + product.price, 0).toFixed(2)

  // message the user & empty the cart after they place an order
  function placeOrder() {
    setCartProducts([])
    alert('You have successfully placed an order that will never be shipped. Congrats!')
  }

  return (
    <main className={styles.main}>
      <div className={styles.cartFavsSwitcher}>
        <Link to="/cart" className={styles.linkToShoppingCart}>
          SHOPPING CART
        </Link>
        <Link to="/favorites" className={styles.linkToFavs}>
          FAVORITES
        </Link>
      </div>
      <div className={styles.cartItems}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>YOUR SHOPPING CART IS EMPTY</p>
            <br />
            <Link className={styles.visitShop} to="/shop">
              SHOP NOW
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((product) => (
              <div key={product.id} className={styles.cartItem}>
                <Link to={'/shop/' + product.category + '/' + product.id}>
                  <img
                    src={product.imageOne}
                    alt={product.title}
                    className={styles.productImage}
                  />
                </Link>
                <div className={styles.productInfo}>
                  <div className={styles.productInfoLeft}>
                    <Link to={'/shop/' + product.category + '/' + product.id}>{product.title}</Link>
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
            ))}

            <div className={styles.grandTotal}>
              <div className={styles.totalDisclaimer}>
                * By continuing, I declare that I have read and accept the
                Purchase Conditions and understand BADILA&apos;s Privacy and
                Cookie Policy.
              </div>
              <div className={styles.totalSum}>
                <span className={styles.totalNumber}>TOTAL &nbsp; {totalCartValue} eur</span>{" "}
                <br />*INCLUDING VAT
              </div>
              <div
                onClick={() => placeOrder()}
                className={styles.placeOrder}
              >
                PLACE ORDER
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default Cart
