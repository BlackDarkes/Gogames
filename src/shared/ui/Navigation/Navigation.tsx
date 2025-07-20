import { Button } from "../Button/Button";
import styles from "./Navigation.module.scss";

interface INavigationProps {
  className?: string;
  tabIndex: number;
}
  
export const Navigation = ({ className, tabIndex }: INavigationProps) => {
  return (
    <>
      <ul className={`${styles.list} ${className}`}>
        <li><a href="./" className={styles.listLink} tabIndex={tabIndex} title="Home">Home</a></li>
        <li><a href="./" className={styles.listLink} tabIndex={tabIndex} title="About as">About Us</a></li>
        <li><a href="./" className={styles.listLink} tabIndex={tabIndex} title="Prices">Prices</a></li>
        <li><a href="./" className={styles.listLink} tabIndex={tabIndex} title="Rules">Rules</a></li>
      </ul>

      <Button ariaLabel="Начать сейчас" title="Get Started Now" tabIndex={tabIndex}>Get Started Now</Button>
    </>
  );
}