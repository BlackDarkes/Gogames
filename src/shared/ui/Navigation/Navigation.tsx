import { Button } from "../Button/Button";
import styles from "./Navigation.module.scss";

interface INavigationProps {
  className?: string
}
  
export const Navigation = ({ className }: INavigationProps) => {
  return (
    <>
      <ul className={`${styles.list} ${className}`}>
        <li><a href="./" className={styles.listLink} title="Home">Home</a></li>
        <li><a href="./" className={styles.listLink} title="About as">About Us</a></li>
        <li><a href="./" className={styles.listLink} title="Prices">Prices</a></li>
        <li><a href="./" className={styles.listLink} title="Rules">Rules</a></li>
      </ul>

      <Button ariaLabel="Начать сейчас" title="Get Started Now">Get Started Now</Button>
    </>
  );
}