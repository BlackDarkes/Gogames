import styles from "./NavList.module.scss";
import { Navigation } from "@/shared/ui/Navigation/Navigation";

export const NavList = () => {
  return (
    <nav className={styles.nav}>
      <Navigation tabIndex={1} />
    </nav>
  );
};
