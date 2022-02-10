import { ThunkAction } from 'redux-thunk';
import { getAuthUserDataTC } from './authReducer';
import { InferActionTypes, RootStateType } from './redux-store';

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof appActions>;

const appReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: action.initialized,
      };
    default:
      return state;
  }
};

export const appActions = {
  initializeAC: (initialized: boolean) =>
    ({
      type: 'INITIALIZED_SUCCESS',
      initialized,
    } as const),
};

type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  ActionTypes
>;

export const initialzeTC = (): ThunkType => async (dispatch) => {
  try {
    await Promise.all([dispatch(getAuthUserDataTC())]);
    dispatch(appActions.initializeAC(true));
  } catch (error) {
    console.error(error);
  }
};

export default appReducer;
