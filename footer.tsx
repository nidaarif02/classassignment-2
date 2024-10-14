import Link from 'next/link';
import styles from './footer.module.css';

const footer=()=>{
    return(
    
            <footer className={`${styles.footer}`}>
               <h1 className={styles.logo}>Crafted with Precision at Digital Fusion.</h1>
                
                <ul className='flex gap-5'>
                    <li className={styles.footerItem}>
                        <Link href="http://www.facebok.com" target='_blank' rel='noopener noreferrer'>Facebook</Link>
                    </li>

                    <li className={styles.footerItem}>
                        <Link href="http://www.linkdein.com" target='_blank' rel='noopener noreferrer'>LinkedIn</Link>
                    </li>

                    <li className={styles.footerItem}>
                        <Link href="https://www.x.com" target='_blank' rel='noopener noreferrer'>X</Link>
                    </li>
                </ul>
              
                <p>&copy; 2024 My Website. All rights reserved.</p>

            </footer>
    
    );
};
export default footer;