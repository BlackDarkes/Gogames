import { Container } from "@/shared/ui/Container/Container";
import { Content } from "@/shared/ui/Content/Content";
import { Information } from "./components/Information/Information";
import { Image } from "./components/Image/Image";

import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Content>
          <Information />
          <Image />
        </Content>
      </Container>
    </section>
  );
};
