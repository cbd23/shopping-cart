import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
import styles from "./App.module.css";

import Header from "../Header/Header";
import { func } from "prop-types";

function App() {

  const [loading, setLoading] = useState(true)
  const [currentProduct, setCurrentProduct] = useState(1)
  
  const isMounted = true

  if (!isMounted) return <p>Loading...</p>

  return (
    <>
      <Header></Header>
      <Outlet context={{ currentProduct, setCurrentProduct }} />
    </>
  );
}

export default App;
