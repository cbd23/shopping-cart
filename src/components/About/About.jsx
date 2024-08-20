// eslint-disable-next-line no-unused-vars
import styles from './About.module.css'

function About() {
    return (
        <main className={styles.main}>
          <h1 className={styles.about}>Hello there!</h1>
          <p className={styles.para}>Chances are that you already realized that this website is <span className={styles.disclaimer}>not a real store</span>.
          <br /><br />
          If you did not, I&apos;ll take that as a compliment.
          <br /><br />
          However, this website is my third project built using <strong>React</strong>, and the main purpose behind it was to put my latest acquired skills at work.
          <br /><br />
          But you can read more technical details about it <a href="https://github.com/cbd23/shopping-cart" target='_blank' className={styles.anchor}>right here</a>. 
          <br /><br />
          Now feel free and explore my fresh products, add them to favorites or even place an order that you won&apos;t have to pay for since it will never be delivered to you.
          <br /><br />
          Because... this is not a real store, remember?
          </p>
        </main>
    )
  }
  
  export default About