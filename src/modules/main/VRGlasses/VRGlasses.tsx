import { Container } from "@/shared/ui/Container/Container";
import { Content } from "@/shared/ui/Content/Content";
import { Information } from "./components/Information/Information";
import styles from "./VRGlasses.module.scss";
import { Image } from "./components/Image/Image";

export const VRGlasses = () => {
  return (
    <section className={styles.vr}>
      <Container>
        <Content>
          <Image />
          <Information />
        </Content>
      </Container>
    </section>
  );
};
