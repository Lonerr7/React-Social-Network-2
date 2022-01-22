import * as axios from 'axios';

export const usersAPI = {
  getUsers(currentPage, pageLegth) {
    return axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${pageLegth}&page=${currentPage}`
    );
  },
};
