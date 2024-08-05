import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import Icon from "@mdi/react";
import {
  mdiHomeOutline,
  mdiStorefrontOutline,
  mdiHeartOutline,
  mdiCartOutline,
  mdiInformationOutline,
} from "@mdi/js";

function Header() {
  return (
    <header>
      <Link to="/about">
        <p className={styles.disclaimer}>
          This is not a real store. Click here to find out more about it.
        </p>
      </Link>
      <nav className={styles.navPages}>
        <div className={styles.logoBox}>
          <Link to="/">
            <div className={styles.navLogo}>BADILA&apos;s</div>
          </Link>
        </div>
        <div className={styles.rightHeaderBox}>
          <ul className={styles.navPagesUl}>
            <Link to="/">
              <li>
                <div className={styles.liIcon}>
                  <Icon
                    className={styles.navIcon}
                    path={mdiHomeOutline}
                    size={1}
                  />
                </div>
                <div className={styles.liText}>Home</div>
              </li>
            </Link>
            <Link to="/shop">
              <li>
                <div className={styles.liIcon}>
                  <Icon
                    className={styles.navIcon}
                    path={mdiStorefrontOutline}
                    size={1}
                  />
                </div>
                <div className={styles.liText}>Shop</div>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <div className={styles.liIcon}>
                  <Icon
                    className={styles.navIcon}
                    path={mdiInformationOutline}
                    size={1}
                  />
                </div>
                <div className={styles.liText}>About</div>
              </li>
            </Link>
            <Link to="/favorites">
              <li>
                <div className={styles.liIcon}>
                  <Icon
                    className={styles.navIcon}
                    path={mdiHeartOutline}
                    size={1}
                  />
                </div>
                <div className={styles.liText}>Favs</div>
              </li>
            </Link>
            <Link to="/cart">
              <li>
                <div className={styles.liIcon}>
                  <Icon
                    className={styles.navIcon}
                    path={mdiCartOutline}
                    size={1}
                  />
                </div>
                <div className={styles.liText}>Cart</div>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
