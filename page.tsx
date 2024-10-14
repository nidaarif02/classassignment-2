import Link from 'next/link';
import styles from './Signin.module.css';
import header from '../component/header/header';
import footer from '../component/footer/footer';

const Signin = () => {
    return (
    <div>
        <header/>
      <main className={styles.main}>
      <h1 className={styles.logo}>Digital Fusion</h1>
        <h1 className={styles.title}>Sign In</h1>
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' placeholder='Enter your email' required />
            </div>
        
            <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' placeholder='Enter your password' required />
            </div>

        <button type='submit' className={styles.button}>Sign In</button>
        <p className={styles.text}>Don't have an account? <Link href="/signup">Sign Up</Link></p>
        
        </form>
      </main>
        <footer/>
        </div>
    );
};
export default Signin;