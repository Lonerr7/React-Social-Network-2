import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const setUserDataAC = (id, login, email, isAuth) => {
  return {
    type: SET_USER_DATA,
    id,
    login,
    email,
    isAuth,
  };
};

export const getAuthUserDataTC = () => async (dispatch) => {
  try {
    const response = await authAPI.authMe();
    console.log(response.data);

    const { id, login, email } = response.data.data;
    if (response.data.resultCode === 0)
      dispatch(setUserDataAC(id, login, email, true));
  } catch (error) {
    console.error(error);
  }
};

export const logInTC = (loginInfo) => async (dispatch) => {
  try {
    const response = await authAPI.logIn(loginInfo);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserDataTC());
    }
  } catch (error) {
    console.error(error);
  }
};

export const logOutTC = () => async (dispatch) => {
  try {
    const response = await authAPI.logOut();

    if (response.data.resultCode === 0) {
      dispatch(setUserDataAC(null, null, null, false));
    }
  } catch (error) {
    console.error(error);
  }
};

export default authReducer;
