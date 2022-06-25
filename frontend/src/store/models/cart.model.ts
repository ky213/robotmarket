import { Robot } from "./robot.model";

export interface CartState {
    items: Robot[];
    loading: boolean;
    error: string | null;
}