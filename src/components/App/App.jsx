import { useState } from "react";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import styles from "./App.module.css";
import Header from "../Header/Header";

function App() {

  const [favoriteProducts, setFavoriteProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  // useEffect(() => {
  //   console.log(favoriteProducts)
  // }, [favoriteProducts])
  
  const isMounted = true
  if (!isMounted) return <h1 className={styles.loading}>Loading...</h1>

  // add/remove products to/from Favorites, depending if they're added or not
  function updateFavorites(id) {
    if (favoriteProducts.includes(id)) {
      console.log(`❌ Product with id ${id} was removed from favorites.`)
      setFavoriteProducts(favoriteProducts.filter(product => product !== id))
    } else {
      console.log(`✅ Product with id ${id} was added to favorites.`)
      setFavoriteProducts([...favoriteProducts, id])
    }
  }

  // add/remove products to/from Cart, depending if they're added or not
  function updateCart(id) {
    if (cartProducts.includes(id)) {
      console.log(`❌ Product with id ${id} was removed from the cart.`)
      setCartProducts(cartProducts.filter(product => product !== id))
    } else {
      console.log(`✅ Product with id ${id} was added to cart.`)
      setCartProducts([...cartProducts, id])
    }
  }

  return (
    <>
      <Header></Header>
      <Outlet context={{favoriteProducts, updateFavorites, cartProducts, updateCart}} />
    </>
  );
}

export default App;