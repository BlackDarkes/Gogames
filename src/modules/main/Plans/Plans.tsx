import { Container } from "@/shared/ui/Container/Container";
import { Title } from "./components/Title/Title";
import { Plan } from "./components/Plan/Plan";
import { Button } from "@/shared/ui/Button/Button";
import styles from './Plans.module.scss'
import { PLANS } from "@/shared/constants/plan";

export const Plans = () => {
  const generatePlans = () => {
    return PLANS.map((plan) => (
      <>
        <Plan key={plan.id} plan={plan} />
        <Button ariaLabel="Выбери план">Select This Plan</Button>
      </>
    ));
  };

  return (
    <section className={styles.plans}>
      <Container>
        <Title />
        <ul>
          {generatePlans()}
        </ul>
      </Container>
    </section>
  );
};
