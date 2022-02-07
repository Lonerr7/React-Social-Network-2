import { ThunkAction } from 'redux-thunk';
import { authAPI, ResultCodeForCaptcha, ResultCodesEnum } from '../api/api';
import { RootStateType } from './redux-store';

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

const authReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
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

type ActionTypes = SetUserDataActionType | GetCaptchaUrlActionType;

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

type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  ActionTypes
>;

export const getCaptchaUrlTC = (): ThunkType => async (dispatch) => {
  try {
    const data = await authAPI.getCaptcha();
    dispatch(getCaptchaUrlAC(data.url));
  } catch (error) {
    console.error(error);
  }
};

export const getAuthUserDataTC = (): ThunkType => async (dispatch) => {
  try {
    const meData = await authAPI.authMe();

    const { id, login, email } = meData.data;
    if (meData.resultCode === ResultCodesEnum.Success)
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
  (loginInfo: LoginInfoType, setStatus: (status?: any) => void): ThunkType =>
  async (dispatch) => {
    try {
      const data = await authAPI.logIn(loginInfo);

      if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired)
        dispatch(getCaptchaUrlTC());

      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserDataTC());
      } else {
        setStatus(data.messages);
      }
    } catch (error) {
      console.error(error);
    }
  };

export const logOutTC = (): ThunkType => async (dispatch) => {
  try {
    const data = await authAPI.logOut();

    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(setUserDataAC(null, null, null, false));
    }
  } catch (error) {
    console.error(error);
  }
};

export default authReducer;
