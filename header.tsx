import Link from 'next/link';
import styles from './header.module.css';


const Header=()=>{
    return(
        <header className={`${styles.header} flex justify-between`}>
        
        <h1 className={`${styles.logo}`}>Digital Fusion - Where technology meets creativity </h1>
        <nav>
            <ul className="flex gap-6">
            <li className={`${styles.navItems}`}>
            <Link href="/about">About</Link>
            </li>
            <li className={`${styles.navItems}`}>
            <Link href="/services">Services</Link>
            </li>
            <li className={`${styles.navItems}`}>
            <Link href="/contact">Contact</Link>
            </li> 
              <li>
            <Link href="/signin">
            <button className={` ${styles.signInButton} `}>Sign In</button>
            </Link>
            </li>
            </ul>
        </nav>
        </header>
        
);
};
export default Header;