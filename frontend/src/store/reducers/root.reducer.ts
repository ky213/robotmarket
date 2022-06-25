import { combineReducers } from "redux";

import { RootState } from "store/models/redux.model";
import robotsReducer from "store/reducers/robot.reducer";
import cartReducer from "store/reducers/cart.reducer";

export default () =>
  combineReducers<RootState>({
    robots: robotsReducer,
    cart: cartReducer,
  });
