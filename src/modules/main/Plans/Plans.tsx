import { Container } from "@/shared/ui/Container/Container";
import { Title } from "./components/Title/Title";
import { Plan } from "./components/Plan/Plan";
import type { IPlant } from "@/shared/types/plan.interface";
import { Button } from "@/shared/ui/Button/Button";
import styles from './Plans.module.scss'

const PLANS: IPlant[] = [
  {
    id: 1,
    active: false,
    title: "Basic",
    price: "$50.00 / Per Hour",
    options: {
      users: "10 users included",
      memory: "2 GB of storage",
      email: "Email support",
      help: "Help center access",
    },
  },
];

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
