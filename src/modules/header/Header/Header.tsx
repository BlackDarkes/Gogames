import IconLogo from "@/assets/images/logo.svg";

import { Container } from "@/shared/ui/Container/Container";
import { NavList } from "./components/navList/NavList";
import { Burger } from "../Burger/Burger";

import styles from "./Header.module.scss";

export const Header = () => {

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <img src={IconLogo} alt="logo" className={styles.headerLogo} />
        <NavList />
        <Burger />
      </Container>
    </header>
  );
};
