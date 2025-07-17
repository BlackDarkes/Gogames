import { Container } from "@/shared/ui/Container/Container";
import IconLogo from "@/assets/images/logo.svg";
import { NavList } from "./components/navList/NavList";
import styles from "./Header.module.scss";
import { Burger } from "../Burger/Burger";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <img src={IconLogo} alt="logo" />
        <NavList />
        <Burger />
      </Container>
    </header>
  );
};
