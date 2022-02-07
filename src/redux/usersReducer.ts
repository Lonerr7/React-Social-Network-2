import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { usersAPI } from '../api/api';
import { UserType } from '../types/types';
import { updateObjectInArray } from '../utils/objectHelpers';
import { RootStateType } from './redux-store';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
  users: [] as Array<UserType>,
  currentPage: 1 as number,
  totalUsersCount: 0 as number,
  pageLength: 5 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, // array of userId
};

export type InitialStateType = typeof initialState;

const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_PROGRESS:
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

type ActionTypes =
  | SetUsersActionType
  | FollowActionType
  | UnfollowActionType
  | SetTotalUsersCountType
  | SetCurrentPageActionType
  | ToggleFetchingActionType
  | ToggleFollowingProgressActionType;

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => {
  return {
    type: SET_USERS,
    users,
  };
};

type FollowActionType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followAC = (userId: number): FollowActionType => {
  return {
    type: FOLLOW,
    userId,
  };
};

type UnfollowActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowAC = (userId: number): UnfollowActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};
export const setTotalUsersCountAC = (
  totalUsersCount: number
): SetTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPageAC = (
  currentPage: number
): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type ToggleFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleFetchingAC = (
  isFetching: boolean
): ToggleFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_FOLLOWING_PROGRESS;
  inProgress: boolean;
  userId: number;
};
export const toggleFollowingProgressAC = (
  inProgress: boolean,
  userId: number
): ToggleFollowingProgressActionType => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  inProgress,
  userId,
});

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
      dispatch(toggleFetchingAC(true));
      const response = await usersAPI.getUsers(currentPage, pageLength);
      dispatch(toggleFetchingAC(false));
      dispatch(setUsersAC(response.data.items));
      dispatch(setTotalUsersCountAC(response.data.totalCount));
      dispatch(setCurrentPageAC(currentPage));
    } catch (error) {
      console.error(error);
    }
  };

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  id: number,
  apiMethod: any,
  actionCreator: (userId: number) => FollowActionType | UnfollowActionType
) => {
  try {
    dispatch(toggleFollowingProgressAC(true, id));

    const response = await apiMethod(id);
    if (response.data.resultCode === 0) dispatch(actionCreator(id));
    dispatch(toggleFollowingProgressAC(false, id));
  } catch (error) {
    console.error(error);
  }
};

export const followTC =
  (id: number): ThunkType =>
  async (dispatch) => {
    const apiMethod = usersAPI.followUser;
    const actionCreator = followAC;

    _followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };

export const unfollowTC =
  (id: number): ThunkType =>
  async (dispatch) => {
    const apiMethod = usersAPI.unfollowUser;
    const actionCreator = unfollowAC;
    
    _followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };

export default usersReducer;
