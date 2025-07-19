import ImageBoy from "../../assets/game-men.svg";
import ImageScreen from "../../assets/screen.svg";
import { motion } from "framer-motion";
import styles from './Image.module.scss'

export const Image = () => {
  return (
    <div className={styles.image}>
      <img src={ImageBoy} alt="мальчик" />
      <motion.img
        src={ImageScreen}
        alt="Экран"
        initial={{ y: 0 }}
        animate={{ y: [10, -40] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className={styles.imageScreen}
      />
    </div>
  );
};
