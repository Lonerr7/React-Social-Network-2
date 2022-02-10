import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ResultCodesEnum, usersAPI } from '../api/api';
import { UserType } from '../types/types';
import { updateObjectInArray } from '../utils/objectHelpers';
import { InferActionTypes, RootStateType } from './redux-store';

const initialState = {
  users: [] as Array<UserType>,
  currentPage: 1 as number,
  totalUsersCount: 0 as number,
  pageLength: 5 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, // array of userId
};

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof usersActions>;

const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: [...action.users] };
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      };
    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'TOGGLE_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: action.inProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const usersActions = {
  setUsersAC: (users: Array<UserType>) =>
    ({
      type: 'SET_USERS',
      users,
    } as const),
  followAC: (userId: number) =>
    ({
      type: 'FOLLOW',
      userId,
    } as const),
  unfollowAC: (userId: number) =>
    ({
      type: 'UNFOLLOW',
      userId,
    } as const),
  setTotalUsersCountAC: (totalUsersCount: number) =>
    ({
      type: 'SET_TOTAL_USERS_COUNT',
      totalUsersCount,
    } as const),
  setCurrentPageAC: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const),
  toggleFetchingAC: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    } as const),
  toggleFollowingProgressAC: (inProgress: boolean, userId: number) =>
    ({
      type: 'TOGGLE_FOLLOWING_PROGRESS',
      inProgress,
      userId,
    } as const),
};

type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  ActionTypes
>;

export const getUsersTC =
  (currentPage: number, pageLength: number): ThunkType =>
  async (dispatch) => {
    try {
      dispatch(usersActions.toggleFetchingAC(true));
      const data = await usersAPI.getUsers(currentPage, pageLength);
      dispatch(usersActions.toggleFetchingAC(false));
      dispatch(usersActions.setUsersAC(data.items));
      dispatch(usersActions.setTotalUsersCountAC(data.totalCount));
      dispatch(usersActions.setCurrentPageAC(currentPage));
    } catch (error) {
      console.error(error);
    }
  };

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  id: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionTypes
) => {
  try {
    dispatch(usersActions.toggleFollowingProgressAC(true, id));

    const data = await apiMethod(id);
    if (data.resultCode === ResultCodesEnum.Success)
      dispatch(actionCreator(id));
    dispatch(usersActions.toggleFollowingProgressAC(false, id));
  } catch (error) {
    console.error(error);
  }
};

export const followTC =
  (id: number): ThunkType =>
  async (dispatch) => {
    const apiMethod = usersAPI.followUser;
    const actionCreator = usersActions.followAC;

    _followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };

export const unfollowTC =
  (id: number): ThunkType =>
  async (dispatch) => {
    const apiMethod = usersAPI.unfollowUser;
    const actionCreator = usersActions.unfollowAC;

    _followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };

export default usersReducer;
