import { ActionType } from "store/models/redux.model";
import { SET_ALERT, RESET_GLOBAL } from "store/actions/global.actions";
import { GlobalState } from "store/models/global.model";

const initialState: GlobalState = {
  alert: {
    message: "",
    type: undefined,
  },
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: {
          message: action.payload.message,
          type: action.payload.type,
        },
      };
    case RESET_GLOBAL:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
