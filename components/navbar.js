import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {

    return (
      <div className={styles.topnav}>
        <div className={styles.brand}>
          <h1>eCommerce</h1>
        </div>
        <div>
          <Link href='/'>Home</Link>
          <Link href='/products'>Products</Link>
          <Link href='/blog'>Blog</Link>
        </div>
      </div>
  );
}

