import { Container } from "@/shared/ui/Container/Container";
import { Icons } from "./components/Icons/Icons";
import ImageLogo from "../../assets/images/logo.svg"
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <img src={ImageLogo} alt="Логотип" className={styles.footerLogo} />
        <p className={styles.footerSecure}>Copyright © 2022 HEALAS.LT. All Rights Reserved.</p>
        <Icons />
      </Container>
    </footer>
  );
};
