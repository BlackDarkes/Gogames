import type { IPlant } from "@/shared/types/plan.interface";
  
export const Plan = ({ plan }: { plan: IPlant }) => {
  return (
    <li>
      <h3>{plan.title}</h3>
    </li>
  );
}