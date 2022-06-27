export type AlertType = "error" | "info" | "warning" | "success" | undefined;

export interface GlobalState {
  alert: {
    message: string;
    type: AlertType;
  };
}
