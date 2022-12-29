import {
  MENU_CLICK,
  SET_SCREEN_SIZE,
} from "../constants/appConstants";

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case MENU_CLICK:
      return { ...state, activeMenu: action.payload };

    case SET_SCREEN_SIZE:
      return { ...state, screenSize: action.payload };

    case "setstep":
      return { ...state, currentStep: action.payload };

    default:
      return state;
  }
};
