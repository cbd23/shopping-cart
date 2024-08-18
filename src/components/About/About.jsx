// eslint-disable-next-line no-unused-vars
import styles from './About.module.css'

function About() {
    return (
        <main className={styles.main}>
          <h1 className={styles.about}>Hello there!</h1>
          <p className={styles.para}>Chances are that you already realized that this website is not a real store.
          <br /><br />
          But if somehow you didn&apos;t see the <span className={styles.disclaimer}>red disclaimer band</span> that&apos;s displayed on each and every page, and now you&apos;re shocked to find out the truth, we&apos;ll take that as a compliment.
          <br /><br />
          So please go ahead and feel free to explore our fresh products, add them to favorites or even place an order that you won&apos;t have to pay for since it will never be delivered to you.
          <br /><br />
          Because... we&apos;re not a real store, remember?
          </p>
        </main>
    )
  }
  
  export default About