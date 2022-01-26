import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1fca21ab-cbeb-4da3-be6a-980233b7a0f9',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageLegth) {
    return axiosInstance.get(`users?count=${pageLegth}&page=${currentPage}`);
  },

  followUser(userId) {
    return axiosInstance.post(`follow/${userId}`);
  },

  unfollowUser(userId) {
    return axiosInstance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return axiosInstance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  authMe() {
    return axiosInstance.get(`auth/me`);
  },
};
