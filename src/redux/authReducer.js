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
        isAuth: true,
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

export const getAuthUserDataTC = () => async (dispatch) => {
  try {
    const response = await authAPI.authMe();

    const { id, login, email } = response.data.data;
    if (response.data.resultCode === 0)
      dispatch(setUserDataAC(id, login, email));
  } catch (error) {
    console.error(error);
  }
};

export default authReducer;
