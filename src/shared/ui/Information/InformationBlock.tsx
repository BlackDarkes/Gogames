import type { ReactNode } from "react";
import IconArrows from "../../../modules/main/Hero/assets/icons/arrows.svg?react";
import styles from "./InformationBlock.module.scss";
import { Button } from "../Button/Button";


interface IInformationProps {
  children?: ReactNode;
  pref: string;
  title: string;
  text?: string;
  isArrow?: boolean;
  showButton?: boolean;
}

export const InformationBlock = ({
  children,
  pref,
  title,
  text,
  isArrow = false,
  showButton = true ,
}: IInformationProps) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTexts}>
        <p className={styles.infoTextsPref}>
          {pref}{" "}
          {isArrow ? <IconArrows className={styles.infoTextsPrefArrow} /> : ""}
        </p>
        <h2 className={styles.infoTextsTitle}>{title}</h2>
        <p className={styles.infoTextsText}>{text}</p>
      </div>

      { showButton ? <Button ariaLabel="начать сейчас">Get Started Now</Button> : "" }

      {children}
    </div>
  );
};
