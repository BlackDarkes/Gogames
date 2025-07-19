import IconFacebook from "../../assets/facebook.svg?react";
import IconTwitter from "../../assets/twitter.svg?react";
import IconInstagram from "../../assets/instagram.svg?react";
import styles from './Icons.module.scss'

export const Icons = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="/" className={styles.listLink}>
          <IconFacebook />
        </a>
      </li>
      <li>
        <a href="/" className={styles.listLink}>
          <IconTwitter />
        </a>
      </li>
      <li>
        <a href="/" className={styles.listLink}>
          <IconInstagram />
        </a>
      </li>
    </ul>
  );
};
