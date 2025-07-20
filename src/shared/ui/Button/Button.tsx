import { type ReactNode } from "react";
import styles from "./Button.module.scss";
import { motion } from "framer-motion";

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  title: string;
  tabIndex?: number;
}

export const Button = ({ children, onClick, ariaLabel, title, tabIndex }: IButtonProps) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={styles.button}
      aria-label={ariaLabel}
      whileHover={{
        backgroundImage: "linear-gradient(90deg, #4499D9, #4499D9)",
      }}
      transition={{ duration: 0.4, ease: "linear" }}
      title={title}
      tabIndex={tabIndex}
    >
      {children}
    </motion.button>
  );
};
