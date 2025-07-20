import { Button } from "../Button/Button";
import styles from "./Navigation.module.scss";

interface INavigationProps {
  className?: string
}
  
export const Navigation = ({ className }: INavigationProps) => {
  return (
    <>
      <ul className={`${styles.list} ${className}`}>
        <li><a href="/" className={styles.listLink}>Home</a></li>
        <li><a href="/" className={styles.listLink}>About Us</a></li>
        <li><a href="/" className={styles.listLink}>Prices</a></li>
        <li><a href="/" className={styles.listLink}>Rules</a></li>
      </ul>

      <Button ariaLabel="Начать сейчас">Get Started Now</Button>
    </>
  );
}