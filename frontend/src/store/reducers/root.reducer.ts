import { combineReducers } from "redux";

import { ReduxState } from "store/models/redux.model";
import robotsReducer from "store/reducers/robot.reducer";
import cartReducer from "store/reducers/cart.reducer";

export default () =>
  combineReducers<ReduxState>({
    robots: robotsReducer,
    cart: cartReducer,
  });
