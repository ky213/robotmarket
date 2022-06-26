import { ActionType } from "store/models/redux.model";
import { CartState } from "store/models/cart.model";
import { ADD_ROBOT, GET_CART, RESET } from "store/actions/cart.actions";
import { REQUEST, SUCCESS, FAILURE } from "utils/redux.utils";

const initialState: CartState = {
  items: [],
  total: 0,
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
    case ADD_ROBOT:
      const robot = state.items.find(({ name }) => name === action.payload.name);
      let items = [...state.items];

      if (robot) {
        robot.amount = (robot.amount || 0) + 1;
      } else {
        action.payload.amount = 1;
        items.push(action.payload);
      }

      return {
        ...state,
        total: state.total + Number(action.payload.price),
        items: items,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
