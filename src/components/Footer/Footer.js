import styles from './Footer.module.css';
import Copyright from './images/Copyright.svg';
import favoriteHeart from './images/Favorite-heart.svg';

const Footer = () => (
  <div className={styles.Footer}>
    <span>
      <img src={Copyright} alt="copyright" />
      &nbsp; 2021 | All rights Reserved | Developed with&nbsp;
      <img src={favoriteHeart} alt="heart" />
      &nbsp;by GoIT Students
    </span>
  </div>
);
export default Footer;
