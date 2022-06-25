import { ActionType } from "store/models/redux.model";
import { Robot, RobotsState } from "store/models/robot.model";
import { GET_ROBOTS, RESET } from "store/actions/robot.actions";
import { REQUEST, SUCCESS, FAILURE } from "utils/redux.utils";

const initialState: RobotsState = {
  robots: [],
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
        robots: action.payload,
      };
    case FAILURE(GET_ROBOTS):
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
