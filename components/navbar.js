import styles from '../styles/Navbar.module.css';
import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";  
import { Index } from "../pages/index"
import { productcard } from '../components/productcard';

export default function Navbar() {

    return (
      <div className={styles.topnav}>
        <div className={styles.brand}>
          <h1>eCommerce</h1>
        </div>
        <div>
          <a href='/index'>Home</a>
          <a href='/products'>Products</a>
          <a href='/productcard'>Productcards</a>
          <IconContext.Provider value={{ size: '20px' }} >
          <div className={styles.icon}>
          <HiMenu/>
          </div>
          </IconContext.Provider>  
        </div>
      </div>
  );
}

