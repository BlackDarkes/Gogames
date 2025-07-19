export interface IOptions {
  users: string;
  memory: string;
  email: string;
  help: string;
}

export interface IPlant {
  id: number;
  active: boolean;
  title: string;
  price: string;
  options: IOptions;
}