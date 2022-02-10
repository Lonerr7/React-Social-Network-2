import { ThunkAction } from 'redux-thunk';
import { authAPI, ResultCodeForCaptcha, ResultCodesEnum } from '../api/api';
import { InferActionTypes, RootStateType } from './redux-store';

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaURL: '' as string,
};

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof authActions>;

const authReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth,
        captchaURL: '',
      };
    case 'SET_CAPTCHA_URL':
      return {
        ...state,
        captchaURL: action.captchaURL,
      };
    default:
      return state;
  }
};

export const authActions = {
  setUserDataAC: (
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
  ) =>
    ({
      type: 'SET_USER_DATA',
      id,
      login,
      email,
      isAuth,
    } as const),
  getCaptchaUrlAC: (captchaURL: string) =>
    ({
      type: 'SET_CAPTCHA_URL',
      captchaURL,
    } as const),
};

type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  ActionTypes
>;

export const getCaptchaUrlTC = (): ThunkType => async (dispatch) => {
  try {
    const data = await authAPI.getCaptcha();
    dispatch(authActions.getCaptchaUrlAC(data.url));
  } catch (error) {
    console.error(error);
  }
};

export const getAuthUserDataTC = (): ThunkType => async (dispatch) => {
  try {
    const meData = await authAPI.authMe();

    const { id, login, email } = meData.data;
    if (meData.resultCode === ResultCodesEnum.Success)
      dispatch(authActions.setUserDataAC(id, login, email, true));
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
      dispatch(authActions.setUserDataAC(null, null, null, false));
    }
  } catch (error) {
    console.error(error);
  }
};

export default authReducer;
