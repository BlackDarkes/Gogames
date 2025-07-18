import { Button } from "@/shared/ui/Button/Button";
import IconArrows from "../../assets/icons/arrows.svg?react";
import { motion } from "framer-motion";
import ImageCross from "../../assets/images/cross.svg";
import styles from "./Information.module.scss";

export const Information = () => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTexts}>
        <p className={styles.infoTextsPref}>
          Gaming Consoles <IconArrows className={styles.infoTextsPrefArrow} />
        </p>
        <h2 className={styles.infoTextsTitle}>
          Try It, Rent It,
          <span className={styles.infoTextsTitlePrice}> Save $50!</span>
        </h2>
        <p className={styles.infoTextsText}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters as opposed.
        </p>
      </div>

      <Button ariaLabel="начать сейчас">Get Started Now</Button>

      <motion.img
        src={ImageCross}
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity }}
        className={styles.infoCross}
        alt="Крест"
      />
    </div>
  );
};
