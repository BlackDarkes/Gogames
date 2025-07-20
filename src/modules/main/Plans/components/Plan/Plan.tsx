import IconV from "../../assets/V.svg?react";
import type { IPlant } from "@/shared/types/plan.interface";
import styles from './Plan.module.scss'

export const Plan = ({ plan, active }: { plan: IPlant, active: boolean }) => {
  return (
    <div className={styles.plan}>
      <h3 className={`${styles.planTitle} ${active ? styles.planTitleActive : ""}`}>{plan.title}</h3>
      <p className={styles.planPrice}>{plan.price}</p>
      <ul className={`${styles.options} ${active ? styles.optionsActive : ""}`}>
        <li><IconV/> {plan.options.users}</li>
        <li><IconV/> {plan.options.memory}</li>
        <li><IconV/> {plan.options.email}</li>
        <li><IconV/> {plan.options.help}</li>
        <li><IconV/> {plan.options.users}</li>
      </ul>
    </div>
  );
};
