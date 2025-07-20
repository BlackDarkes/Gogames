import ImageCloud from "../../assets/cloud.svg";
import ImageGearBig from "../../assets/gearBig.svg";
import ImageGearSmall from "../../assets/gearSmol.svg";
import ImageGamepad from "../../assets/gamepad.svg";
import { motion } from "framer-motion";
import styles from "./Image.module.scss";

export const Image = () => {
  return (
    <div className={styles.image}>
      <motion.img
        src={ImageGearSmall}
        alt="Маленькая шестерёнка"
        className={`${styles.imageGear} ${styles.imageGearSmall}`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src={ImageGearBig}
        alt="Большая шестерёнка"
        className={`${styles.imageGear} ${styles.imageGearBig}`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <img src={ImageCloud} alt="облако" />
      <motion.img
        src={ImageGamepad}
        alt="Контроллер"
        className={styles.imageGamepad}
        initial={{ y: 0 }}
        animate={{ y: [20, -20] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};
