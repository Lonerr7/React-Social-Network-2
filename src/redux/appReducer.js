import { getAuthUserDataTC } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: action.initialized,
      };
    default:
      return state;
  }
};

const initializeAC = (initialized) => ({
  type: INITIALIZED_SUCCESS,
  initialized,
});

export const initialzeTC = () => async (dispatch) => {
  try {
    await Promise.all([dispatch(getAuthUserDataTC())]);
    dispatch(initializeAC(true));
  } catch (error) {
    console.error(error);
  }
};

export default appReducer;
