import ImageCloud from "../../assets/cloud.svg"
import ImageGearBig from "../../assets/gearBig.svg";
import ImageGearSmall from "../../assets/gearSmol.svg";
import ImageGamepad from "../../assets/gamepad.svg";
import { motion } from "framer-motion";

export const Image = () => {
  return (
    <div>
      <motion.img src={ImageGearSmall} />
      <motion.img src={ImageGearBig} />
      <img src={ImageCloud} alt="облако" />
      <motion.img src={ImageGamepad} />
    </div>
  );
}