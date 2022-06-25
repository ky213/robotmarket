import { ActionType } from "store/models/redux.model";
import { CartState } from "store/models/cart.model";
import { GET_CART, RESET } from "store/actions/cart.actions";
import { REQUEST, SUCCESS, FAILURE } from "utils/redux.utils";

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case REQUEST(GET_CART):
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESS(GET_CART):
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case FAILURE(GET_CART):
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};