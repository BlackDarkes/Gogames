import { motion } from "framer-motion";
import ImageCross from "../../assets/images/cross.svg";
import styles from "./Information.module.scss";
import { InformationBlock } from "@/shared/ui/Information/InformationBlock";

export const Information = () => {
  return (
    <InformationBlock
      isArrow={true}
      pref="Gaming Consoles"
      title="Try It, Rent It, Save $50!"
      text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed."
    >
      <motion.img
        src={ImageCross}
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className={styles.infoCross}
        alt="Крест"
      />
    </InformationBlock>
  );
};
