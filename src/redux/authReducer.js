import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaURL: '',
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
        captchaURL: '',
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaURL: action.captchaURL,
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

export const getCaptchaUrlAC = (captchaURL) => ({
  type: SET_CAPTCHA_URL,
  captchaURL,
});

export const getCaptchaUrlTC = () => async (dispatch) => {
  try {
    const response = await authAPI.getCaptcha();
    dispatch(getCaptchaUrlAC(response.data.url));
  } catch (error) {
    console.error(error);
  }
};

export const getAuthUserDataTC = () => async (dispatch) => {
  try {
    const response = await authAPI.authMe();

    const { id, login, email } = response.data.data;
    if (response.data.resultCode === 0)
      dispatch(setUserDataAC(id, login, email, true));
  } catch (error) {
    console.error(error);
  }
};

export const logInTC = (loginInfo, setStatus) => async (dispatch) => {
  try {
    const response = await authAPI.logIn(loginInfo);

    if (response.data.resultCode === 10) dispatch(getCaptchaUrlTC());

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserDataTC());
    } else {
      setStatus(response.data.messages);
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
