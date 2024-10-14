import styles from './hero.module.css';

const Hero = () => {
    return( 
    <section className={`${styles.heroSection}`}>
    <div className={styles.heroContent}>
    <h1 className={styles.heroTitle}>"Unlock the Future with Digital Fusion"</h1>
    <p className={styles.heroDescription}>Discover amazing content and services! Your one-stop solution for best services!</p>
<button>Get Started</button>
   
        </div>    
    </section>

    );
};
export default Hero;
