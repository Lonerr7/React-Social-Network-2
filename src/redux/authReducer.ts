import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

export type InitialStateType = typeof initialState;

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaURL: '' as string,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetUserDataActionType = {
  type: typeof SET_USER_DATA;
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};

export const setUserDataAC = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): SetUserDataActionType => {
  return {
    type: SET_USER_DATA,
    id,
    login,
    email,
    isAuth,
  };
};

type GetCaptchaUrlActionType = {
  type: typeof SET_CAPTCHA_URL;
  captchaURL: string;
};

export const getCaptchaUrlAC = (
  captchaURL: string
): GetCaptchaUrlActionType => ({
  type: SET_CAPTCHA_URL,
  captchaURL,
});

export const getCaptchaUrlTC = () => async (dispatch: any) => {
  try {
    const response = await authAPI.getCaptcha();
    dispatch(getCaptchaUrlAC(response.data.url));
  } catch (error) {
    console.error(error);
  }
};

export const getAuthUserDataTC = () => async (dispatch: any) => {
  try {
    const response = await authAPI.authMe();

    const { id, login, email } = response.data.data;
    if (response.data.resultCode === 0)
      dispatch(setUserDataAC(id, login, email, true));
  } catch (error) {
    console.error(error);
  }
};

type LoginInfoType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

export const logInTC =
  (loginInfo: LoginInfoType, setStatus: any) => async (dispatch: any) => {
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

export const logOutTC = () => async (dispatch: any) => {
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
