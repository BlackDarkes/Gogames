import type { IPlant } from "@/shared/types/plan.interface";
import styles from './Plan.module.scss'

export const Plan = ({ plan }: { plan: IPlant }) => {
  return (
    <li className={styles.plan}>
      <h3>{plan.title}</h3>
      <p>{plan.price}</p>
      <ul>
        <li>{plan.options.users}</li>
        <li>{plan.options.memory}</li>
        <li>{plan.options.email}</li>
        <li>{plan.options.help}</li>
      </ul>
    </li>
  );
};
