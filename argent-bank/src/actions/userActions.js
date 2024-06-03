import { LOGIN_URL, PROFILE_URL } from "../Utils/apiRoutes";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";

// Action creators
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};

export const fetchUserInfoSuccess = (userInfo) => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload: userInfo,
});

// Thunk actions
export const loginUser =
  ({ email, password, rememberMe }) =>
  async (dispatch) => {
    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Failed to login");

      const data = await response.json();
      dispatch(loginSuccess(data.body.token));

      if (rememberMe) localStorage.setItem("token", data.body.token);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export const fetchUserInfo = (token) => async (dispatch) => {
  try {
    const response = await fetch(PROFILE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch user info");

    const data = await response.json();
    dispatch(fetchUserInfoSuccess(data.body));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUserProfile =
  ({ userName, token }) =>
  async (dispatch) => {
    try {
      const response = await fetch(PROFILE_URL, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      const data = await response.json();
      dispatch(fetchUserInfoSuccess(data.body));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
