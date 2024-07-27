import styles from './Header.module.css'

import Icon from '@mdi/react'
import { mdiHomeOutline, mdiStorefrontOutline, mdiHeartOutline, mdiCartOutline, mdiInformationOutline } from '@mdi/js'

function Header() {
    return (
        <header>
        <p className={styles.disclaimer}>
          This is not a real store. Click here to find out more about it.
        </p>
        <nav className={styles.navPages}>
          <div className={styles.leftHeaderBox}>
            <div className={styles.navAbout}>
              <Icon className={styles.navIcon} path={mdiInformationOutline} size={1} />
              <div className={styles.aboutText}>About</div>
            </div>
          </div>
          <div className={styles.midHeaderBox}>
            <div className={styles.navLogo}>B A D I L A</div>
          </div>
          <div className={styles.rightHeaderBox}>
            <ul className={styles.navPagesUl}>
              <li>
                <div className={styles.liIcon}>
                  <Icon className={styles.navIcon} path={mdiHomeOutline} size={1} />
                </div>
                <div className={styles.liText}>Home</div>
              </li>
              <li>
                <div className={styles.liIcon}>
                  <Icon className={styles.navIcon} path={mdiStorefrontOutline} size={1} />
                </div>
                <div className={styles.liText}>Shop</div>
              </li>
              <li>
                <div className={styles.liIcon}>
                  <Icon className={styles.navIcon} path={mdiHeartOutline} size={1} />
                </div>
                <div className={styles.liText}>Favorites</div>
              </li>
              <li>
                <div className={styles.liIcon}>
                  <Icon className={styles.navIcon} path={mdiCartOutline} size={1} />
                </div>
                <div className={styles.liText}>Cart</div>
              </li>
            </ul>
          </div>
        </nav>
        <nav className={styles.navCategories}>
          <ul>
            <li>Women&apos;s clothing</li>
            <li>Men&apos;s clothing</li>
            <li>Electronics</li>
            <li>Jewelery</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header