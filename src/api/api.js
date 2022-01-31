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

  getProfileStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`);
  },

  updateProfileStatus(status) {
    return axiosInstance.put(`profile/status`, { status });
  },

  uploadPhoto(image) {
    const formData = new FormData();
    formData.append('image', image);
    return axiosInstance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const authAPI = {
  authMe() {
    return axiosInstance.get(`auth/me`);
  },

  logIn(loginInfo) {
    return axiosInstance.post(`auth/login`, { ...loginInfo });
  },

  logOut() {
    return axiosInstance.delete(`auth/login`);
  },

  getCaptcha() {
    return axiosInstance.get(`/security/get-captcha-url`);
  },
};
