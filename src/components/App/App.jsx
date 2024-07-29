import { useState } from "react";
import { Outlet } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
import styles from "./App.module.css";

import Header from "../Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}

export default App;
