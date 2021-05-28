import styles from '../styles/navbar.module.css'
import Link from 'next/link'

var Navbar = () => {
    return(
        <div className={styles.nav}>
            <h1 className={styles.name} >Hotel Booking</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </div>
    ) 
}

export default Navbar;