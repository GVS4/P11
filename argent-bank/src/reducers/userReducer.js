import {
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_USER_INFO_SUCCESS,
} from "../actions/userActions";

const initialState = {
  isAuthenticated: false,
  token: null,
  userInfo: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case LOGOUT:
      return initialState; // Retour à l'état initial
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;