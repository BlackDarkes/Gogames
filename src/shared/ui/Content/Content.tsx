import type { ReactNode } from "react";
import styles from "./Content.module.scss";

interface IContentProps {
  children: ReactNode;
  isLeft?: boolean;
}

export const Content = ({  children, isLeft = true }: IContentProps) => {
  return (
    <div className={isLeft ? styles.content : styles.reverse}>{children}</div>
  );
};
