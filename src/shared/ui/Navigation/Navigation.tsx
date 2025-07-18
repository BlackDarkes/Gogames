import { Button } from "../Button/Button";
import styles from "./Navigation.module.scss";

interface INavigationProps {
  className?: string
}
  
export const Navigation = ({ className }: INavigationProps) => {
  return (
    <>
      <ul className={`${styles.list} ${className}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Prices</a></li>
        <li><a href="/">Rules</a></li>
      </ul>

      <Button ariaLabel="Начать сейчас">Get Started Now</Button>
    </>
  );
}