import { Button } from "@/shared/ui/Button/Button";
import styles from './NavList.module.scss'

export const NavList = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Prices</a></li>
        <li><a href="/">Rules</a></li>
      </ul>

      <Button ariaLabel="Начать сейчас">Get Started Now</Button>
    </nav>
  );
}