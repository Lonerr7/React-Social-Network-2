import { createSelector } from 'reselect';
import { RootStateType } from './redux-store';

export const getUsers = (state: RootStateType) => state.usersPage.users;

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});

export const getCurrentPage = (state: RootStateType) =>
  state.usersPage.currentPage;

export const getTotalUsersCount = (state: RootStateType) =>
  state.usersPage.totalUsersCount;

export const getPageLength = (state: RootStateType) =>
  state.usersPage.pageLength;

export const getIsFetching = (state: RootStateType) =>
  state.usersPage.isFetching;

export const getFollowingInProgress = (state: RootStateType) =>
  state.usersPage.followingInProgress;
