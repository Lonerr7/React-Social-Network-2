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

export default authReducer;
