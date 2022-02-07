import { ThunkAction } from 'redux-thunk';
import { getAuthUserDataTC } from './authReducer';
import { RootStateType } from './redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState;

const appReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
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

type ActionTypes = InitializeActionType;

type InitializeActionType = {
  type: typeof INITIALIZED_SUCCESS;
  initialized: boolean;
};
const initializeAC = (initialized: boolean): InitializeActionType => ({
  type: INITIALIZED_SUCCESS,
  initialized,
});

type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  ActionTypes
>;

export const initialzeTC = (): ThunkType => async (dispatch) => {
  try {
    await Promise.all([dispatch(getAuthUserDataTC())]);
    dispatch(initializeAC(true));
  } catch (error) {
    console.error(error);
  }
};

export default appReducer;
