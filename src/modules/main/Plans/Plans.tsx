import { Container } from "@/shared/ui/Container/Container";
import { Title } from "./components/Title/Title";
import { Plan } from "./components/Plan/Plan";
import { Button } from "@/shared/ui/Button/Button";
import { PLANS } from "@/shared/constants/plan";
import IconV from "./assets/V.svg?react";
import styles from './Plans.module.scss'

export const Plans = () => {
  const generatePlans = () => {
    return PLANS.map((plan) => (
      <li className={`${styles.plansItem} ${plan.active ? styles.plansItemActive : ''}`} key={plan.id}>
        { plan.active ? <div className={styles.plansItemCircle}><div className={styles.plansItemCircleSmall}><IconV/></div></div> : "" }
        <Plan plan={plan} active={plan.active} />
        <Button ariaLabel="Выбери план">Select This Plan</Button>
      </li>
    ));
  };

  return (
    <section className={styles.plans}>
      <Container className={styles.plansContainer}>
        <Title />
        <ul className={styles.plansList}>
          {generatePlans()}
        </ul>
      </Container>
    </section>
  );
};
