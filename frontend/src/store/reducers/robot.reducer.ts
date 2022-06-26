import { ActionType } from "store/models/redux.model";
import { Robot, RobotsState } from "store/models/robot.model";
import { GET_ROBOTS, RESET_ROBOTS } from "store/actions/robot.actions";
import { REQUEST, SUCCESS, FAILURE } from "utils/redux.utils";

const initialState: RobotsState = {
  robotsList: [],
  currentRobot: null,
  loading: false,
  error: null,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case REQUEST(GET_ROBOTS):
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESS(GET_ROBOTS):
      return {
        ...state,
        loading: false,
        robotsList: action.payload.data.data,
      };
    case FAILURE(GET_ROBOTS):
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_ROBOTS:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
