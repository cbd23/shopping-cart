import styles from './ErrorPage.module.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.message}>We&apos;re sorry, but the product/category that you&apos;re looking for doesn&apos;t exist.</h1>
                <Link to='/' className={styles.homeBtn}>Back to Homepage</Link>
            </main>
        </>
    )
}

export default ErrorPage