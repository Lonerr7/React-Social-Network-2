import axios from 'axios';
import { LogInType } from '../components/Login/Login';
import { ProfileType } from '../types/types';

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1fca21ab-cbeb-4da3-be6a-980233b7a0f9',
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageLegth: number) {
    return axiosInstance.get(`users?count=${pageLegth}&page=${currentPage}`);
  },

  followUser(userId: number) {
    return axiosInstance.post(`follow/${userId}`);
  },

  unfollowUser(userId: number) {
    return axiosInstance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getUserProfile(userId: number) {
    return axiosInstance.get(`profile/${userId}`);
  },

  getProfileStatus(userId: number) {
    return axiosInstance.get(`profile/status/${userId}`);
  },

  updateProfileStatus(status: string) {
    return axiosInstance.put(`profile/status`, { status });
  },

  uploadPhoto(image: any) {
    const formData = new FormData();
    formData.append('image', image);
    return axiosInstance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  updateProfileInfo(newProfileInfo: ProfileType) {
    return axiosInstance.put(`/profile`, { ...newProfileInfo });
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

type MeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type LogInResponseType = {
  resultCode: ResultCodesEnum | ResultCodeForCaptcha;
  messages: Array<string>;
  data: {
    userId: number;
  };
};
type LogOutResponseType = {
  resultCode: ResultCodesEnum;
  messages: Array<string>;
  data: {};
};
type GetCaptchaType = {
  url: string;
};

export const authAPI = {
  authMe() {
    return axiosInstance.get<MeResponseType>(`auth/me`).then((res) => res.data);
  },

  logIn(loginInfo: LogInType) {
    return axiosInstance
      .post<LogInResponseType>(`auth/login`, {
        ...loginInfo,
      })
      .then((res) => res.data);
  },

  logOut() {
    return axiosInstance
      .delete<LogOutResponseType>(`auth/login`)
      .then((res) => res.data);
  },

  getCaptcha() {
    return axiosInstance
      .get<GetCaptchaType>(`/security/get-captcha-url`)
      .then((res) => res.data);
  },
};
