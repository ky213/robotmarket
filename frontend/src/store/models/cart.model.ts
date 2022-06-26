import { Robot } from "./robot.model";

export interface RobotInCart extends Robot {
  amount: number;
}

export interface CartState {
  items: RobotInCart[];
  total: number;
  loading: boolean;
  error: string | null;
}
