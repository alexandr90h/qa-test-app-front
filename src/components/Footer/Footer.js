import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Copyright from './images/Copyright.svg';
import favoriteHeart from './images/Favorite-heart.svg';

const Footer = () => (
  <footer className={styles.footer}>
    {/* <div>
      <p className={styles.footerText}>
        <span className={styles.copyright}>
          <img src={Copyright} alt="copyright" />
        </span>
        2021 | All Rights Reserved | Developed with
        <img src={favoriteHeart} alt="heart" />
        <svg className="footerIcon" width="17" height="17">
          <use href="./img/sprite.svg#heart"></use>
        </svg>
        by&nbsp;
        <Link to="/contacts" className="footerContacts">
          GoIT Students
        </Link>
      </p>
    </div> */}
    <span className={styles.footerText}>
      <img src={Copyright} alt="copyright" />
      &nbsp; 2021 | All rights Reserved | Developed with&nbsp;
      <img src={favoriteHeart} alt="heart" />
      &nbsp; by &nbsp;
      <Link to="/contacts" className={styles.footerContacts}>
        GoIT Students
      </Link>
    </span>
  </footer>
);
export default Footer;
