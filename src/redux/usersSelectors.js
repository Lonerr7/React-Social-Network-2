export const getUsers = (state) => state.usersPage.users;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const getPageLength = (state) => state.usersPage.pageLength;

export const getIsFetching = (state) => state.usersPage.isFetching;

export const getFollowingInProgress = (state) =>
  state.usersPage.followingInProgress;