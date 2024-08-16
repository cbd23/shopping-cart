import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import styles from "./App.module.css";
import Header from "../Header/Header";

function App() {

  const [favoriteProducts, setFavoriteProducts] = useState([])

  // useEffect(() => {
  //   console.log(favoriteProducts)
  // }, [favoriteProducts])
  
  const isMounted = true
  if (!isMounted) return <h1 className={styles.loading}>Loading...</h1>

  
  // add/remove products to/from Favorites, depending if they're added or not
  function updateFavorites(id) {
    if (favoriteProducts.includes(id)) {
      console.log(`Product with id ${id} was removed from Favorites.`)
      setFavoriteProducts(favoriteProducts.filter(product => product !== id))
    } else {
      console.log(`Product with id ${id} was added to Favorites.`)
      setFavoriteProducts([...favoriteProducts, id])
    }
  }

  return (
    <>
      <Header></Header>
      <Outlet context={{favoriteProducts, updateFavorites}} />
    </>
  );
}

export default App;