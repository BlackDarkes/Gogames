import { Container } from "@/shared/ui/Container/Container";
import { Content } from "@/shared/ui/Content/Content";
import { Information } from "./components/Information/Information";
import styles from './Xbox.module.scss'

export const Xbox = () => {
  return (
    <section className={styles.xbox}>
      <Container>
        <Content>
          <Information />
        </Content>
      </Container>
    </section>
  );
};
