import { CartState } from "./cart.model";
import { RobotsState } from "./robot.model";

export interface ActionType {
    type: string;
    payload?: any;
}

export type DispatchType = (action: ActionType) => ActionType;

export interface RootState {
    robots: RobotsState;
    cart: CartState;
}
