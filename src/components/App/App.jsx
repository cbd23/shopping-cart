import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
import styles from "./App.module.css";

import Header from "../Header/Header";
import { func } from "prop-types";

function App() {

  const [loading, setLoading] = useState(true)
  const [carouselProducts, setCarouselProducts] = useState({})

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/women's clothing`, {mode: "cors"})
    .then((data) => data.json())
    .then((data) => setCarouselProducts((prevProducts) => ({
      ...prevProducts,
      "women's clothing": data
    })))
    fetch(`https://fakestoreapi.com/products/category/men's clothing`, {mode: "cors"})
    .then((data) => data.json())
    .then((data) => setCarouselProducts((prevProducts) => ({
      ...prevProducts,
      "men's clothing": data
    })))
    fetch(`https://fakestoreapi.com/products/category/jewelery`, {mode: "cors"})
    .then((data) => data.json())
    .then((data) => setCarouselProducts((prevProducts) => ({
      ...prevProducts,
      "jewelery": data
    })))
    fetch(`https://fakestoreapi.com/products/category/electronics`, {mode: "cors"})
    .then((data) => data.json())
    .then((data) => setCarouselProducts((prevProducts) => ({
      ...prevProducts,
      "electronics": data
    })))
    .finally(setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}

export default App;
