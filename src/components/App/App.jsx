import { Outlet } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import styles from "./App.module.css";
import Header from "../Header/Header";

function App() {
  
  const isMounted = true
  if (!isMounted) return <h1 className={styles.loading}>Loading...</h1>

  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}

export default App;