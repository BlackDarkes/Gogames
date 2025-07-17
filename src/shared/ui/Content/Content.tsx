import type { ReactNode } from "react";
import styles from "./Content.module.scss";

interface IContent {
  children: ReactNode;
  isLeft?: boolean;
}

export const Content = ({  children, isLeft = true }: IContent) => {
  return (
    <div className={isLeft ? styles.content : styles.reverse}>{children}</div>
  );
};
