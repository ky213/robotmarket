import { combineReducers } from "redux";

import { RootState } from "store/models/redux.model";
import globalReducer from "store/reducers/global.reducer";
import robotsReducer from "store/reducers/robot.reducer";
import cartReducer from "store/reducers/cart.reducer";

const rootReducer = combineReducers<RootState>({
  robots: robotsReducer,
  cart: cartReducer,
  global: globalReducer
});

export default rootReducer;
