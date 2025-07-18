import styles from "./Burger.module.scss";
import { useState } from "react";
import { BurgerList } from "./components/BurgerList/BurgerList";

export const Burger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.burgerButton} ${isOpen ? styles.burgerButtonActive : ""}`}
      >
        <span
          className={`${styles.burgerButtonLine} ${
            isOpen ? styles.burgerButtonActiveLine : ""
          }`}
        />
      </button>

      { isOpen ? <BurgerList isOpen={isOpen} /> : "" }
    </>
  );
};
