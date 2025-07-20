import ImageBox1 from "../../assets/images/box1.png";
import ImageBox2 from "../../assets/images/box2.png";
import ImageBoy from "../../assets/images/boy.svg";
import ImageSplash from "../../assets/images/splash.svg";
import ImageCircle from "../../assets/images/circle.svg";
import { motion } from "framer-motion";
import styles from "./Image.module.scss";

export const Image = () => {
  return (
    <>
      <div className={styles.image}>
        <div className={`${styles.imageBox} ${styles.imageBox1}`}>
          <img src={ImageBox1} alt="VR очки" />
        </div>
        <div className={styles.imageBlock}>
          <div className={styles.imageCircle}>
            <img src={ImageCircle} alt="Круг" />
          </div>
          <div className={styles.imageAnimation}>
            <div className={styles.imageAnimationBoy}>
              <motion.img
                src={ImageBoy}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                alt="Паренёк"
              />
            </div>
            <div className={styles.imageAnimationSplash}>
              <motion.img
                src={ImageSplash}
                alt="Волна"
                initial={{ opacity: 0, y: 0 }}
                animate={{ y: -150, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.imageBox} ${styles.imageBox2}`}>
          <img src={ImageBox2} alt="Геймпад" />
        </div>
      </div>
    </>
  );
};
