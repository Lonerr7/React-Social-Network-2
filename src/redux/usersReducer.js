import { usersAPI } from '../api/api';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  pageLength: 5,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
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

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const toggleFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgressAC = (inProgress, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  inProgress,
  userId,
});

export const getUsersTC = (currentPage, pageLength) => async (dispatch) => {
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

export const followTC = (id) => async (dispatch) => {
  try {
    dispatch(toggleFollowingProgressAC(true, id));
    const response = await usersAPI.followUser(id);
    if (response.data.resultCode === 0) dispatch(followAC(id));
    dispatch(toggleFollowingProgressAC(false, id));
  } catch (error) {
    console.error(error);
  }
};

export const unfollowTC = (id) => async (dispatch) => {
  try {
    dispatch(toggleFollowingProgressAC(true, id));
    const response = await usersAPI.unfollowUser(id);
    if (response.data.resultCode === 0) dispatch(unfollowAC(id));
    dispatch(toggleFollowingProgressAC(false, id));
  } catch (error) {
    console.error(error);
  }
};

export default usersReducer;
