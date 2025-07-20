import IconLogo from "@/assets/images/logo.svg";

import { Container } from "@/shared/ui/Container/Container";
import { NavList } from "./components/navList/NavList";
import { Burger } from "../Burger/Burger";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { throttle } from "lodash";

import styles from "./Header.module.scss";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(
    scrollY,
    "change",
    throttle((latest) => {
      setIsScrolled(latest > 30);
    }, 50)
  );

  return (
    <motion.header
      animate={{ backgroundColor: isScrolled ? "#FFE6D7" : "#FFE6D700" }}
      transition={{ duration: 0.4 }}
      className={styles.header}
    >
      <Container className={styles.headerContainer}>
        <img src={IconLogo} alt="Логотип" className={styles.headerLogo} />
        <NavList />
        <Burger />
      </Container>
    </motion.header>
  );
};
