import { getAuthUserDataTC } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitialzeActionType = {
  type: typeof INITIALIZED_SUCCESS,
  initialized: boolean
};

const initializeAC = (initialized: boolean): InitialzeActionType => ({
  type: INITIALIZED_SUCCESS,
  initialized,
});

export const initialzeTC = () => async (dispatch: any) => {
  try {
    await Promise.all([dispatch(getAuthUserDataTC())]);
    dispatch(initializeAC(true));
  } catch (error) {
    console.error(error);
  }
};

export default appReducer;
