import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image'
import logo from '../public/res/logo.png';

const NavbarCustom = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          
            <Image src={logo} alt="" width={100} height={100}/>
            <span>NJN Limited</span>
          
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/" passHref>
           Home
          </Link>
        </li>
        <li className={styles.dropdown}>
          <Link href="/" passHref>
            Services
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/service1" passHref>
                Service 1
              </Link>
            </li>
            <li>
              <Link href="/service2" passHref>
                Service 2
              </Link>
            </li>
            <li>
              <Link href="/service3" passHref>
                Service 3
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/company" passHref>
            Company
          </Link>
        </li>
        <li>
          <Link href="/news" passHref>
            News
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarCustom;
