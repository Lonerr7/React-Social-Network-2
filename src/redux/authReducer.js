import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        isAuth: true,
      };
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export const setUserDataAC = (id, login, email) => ({
  type: SET_USER_DATA,
  id,
  login,
  email,
});

export const logInAC = () => ({
  type: LOG_IN,
});

export const logOutAC = () => ({
  type: LOG_OUT,
});

export const getAuthUserDataTC = () => async (dispatch) => {
  try {
    const response = await authAPI.authMe();
    console.log(response.data);

    const { id, login, email } = response.data.data;
    if (response.data.resultCode === 0)
      dispatch(setUserDataAC(id, login, email));
  } catch (error) {
    console.error(error);
  }
};

export const logInTC = (loginInfo) => async (dispatch) => {
  debugger
  try {
    const response = await authAPI.logIn(loginInfo);

    if (response.data.resultCode === 0) {
      dispatch(logInAC());
      getAuthUserDataTC();
    }
  } catch (error) {
    console.error(error);
  }
};

export const logOutTC = () => async (dispatch) => {
  try {
    const response = await authAPI.logOut();

    if (response.data.resultCode === 0) {
      dispatch(logOutAC());
      getAuthUserDataTC(); //! Когда разлогинились и пытаемся сделать getAuthUserDataTC(), то он выдает resultCode 1 и диспатч не идет
    }
  } catch (error) {
    console.error(error);
  }
};

export default authReducer;
