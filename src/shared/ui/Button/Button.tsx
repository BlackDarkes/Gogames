import type { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  ariaLabel: string;
}

export const Button = ({ children, onClick, ariaLabel }: IButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
