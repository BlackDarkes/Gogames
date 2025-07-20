import IconFacebook from "../../assets/facebook.svg?react";
import IconTwitter from "../../assets/twitter.svg?react";
import IconInstagram from "../../assets/instagram.svg?react";
import styles from "./Icons.module.scss";

export const Icons = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="./" className={styles.listLink} title="Facebook">
          <IconFacebook />
        </a>
      </li>
      <li>
        <a href="./" className={styles.listLink} title="Twitter">
          <IconTwitter />
        </a>
      </li>
      <li>
        <a href="./" className={styles.listLink} title="Instagram">
          <IconInstagram />
        </a>
      </li>
    </ul>
  );
};
