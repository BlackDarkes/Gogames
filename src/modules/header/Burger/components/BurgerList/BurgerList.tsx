import { Navigation } from "@/shared/ui/Navigation/Navigation";
import styles from "./BurgerList.module.scss";

interface IBurgerListProps {
  isOpen: boolean
}

export const BurgerList = ({ isOpen }: IBurgerListProps) => {
  return (
    <div className={`${styles.burgerBlock} ${isOpen ? styles.burgerBlockActive : ""}`}>
      <Navigation className={styles.burgerBlockList} tabIndex={-1} />
    </div>
  );
}