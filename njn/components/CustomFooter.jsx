import styles from '../styles/Footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const CustomFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.company}>
          <h3>My Company:-</h3>
          <p>123 Main St, Anytown USA 12345</p>
        </div>
        <div className={styles.social}>
          <a href="https://www.facebook.com"><FaFacebookF /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  )
}

export default CustomFooter;
