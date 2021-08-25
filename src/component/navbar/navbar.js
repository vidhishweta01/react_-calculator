import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <h1 className={styles.head}>Math Magicians</h1>
    <div className={styles.links}>
      <Link to="/" exact>
        Home
        {' '}
      </Link>
      <Link to="/quote" className={styles.mid_link}>
        Quote
        {' '}
      </Link>
      <Link to="/calculator">Calculator </Link>
    </div>
  </nav>
);

export default Navbar;
