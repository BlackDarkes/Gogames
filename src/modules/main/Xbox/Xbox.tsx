import { Container } from "@/shared/ui/Container/Container";
import { Content } from "@/shared/ui/Content/Content";
import { Information } from "./components/Information/Information";
import { Image } from "./components/Image/Image";
import styles from "./Xbox.module.scss";

export const Xbox = () => {
  return (
    <section className={styles.xbox}>
      <Container>
        <Content>
          <Information />
          <Image />
        </Content>
      </Container>
    </section>
  );
};
