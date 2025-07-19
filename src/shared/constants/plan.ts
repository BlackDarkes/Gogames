import type { IPlant } from "../types/plan.interface";

export const PLANS: IPlant[] = [
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
  {
    id: 2,
    active: true,
    title: "Standard",
    price: "$95.00 / Per Hour",
    options: {
      users: "10 users included",
      memory: "2 GB of storage",
      email: "Email support",
      help: "Help center access",
    },
  },
  {
    id: 3,
    active: false,
    title: "Premium",
    price: "$120.00 / Per Hour",
    options: {
      users: "10 users included",
      memory: "2 GB of storage",
      email: "Email support",
      help: "Help center access",
    },
  },
];