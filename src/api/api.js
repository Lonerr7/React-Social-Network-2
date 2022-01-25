import * as axios from 'axios';

export const usersAPI = {
  getUsers(currentPage, pageLegth) {
    return axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${pageLegth}&page=${currentPage}`,
      {
        withCredentials: true,
      }
    );
  },

  followUser(userId) {
    return axios.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},
      {
        withCredentials: true,
        headers: {
          'API-KEY': '1fca21ab-cbeb-4da3-be6a-980233b7a0f9',
        },
      }
    );
  },

  unfollowUser(userId) {
    return axios.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {
        withCredentials: true,
        headers: {
          'API-KEY': '1fca21ab-cbeb-4da3-be6a-980233b7a0f9',
        },
      }
    );
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    );
  },
};

export const authAPI = {
  authMe() {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    });
  },
};
