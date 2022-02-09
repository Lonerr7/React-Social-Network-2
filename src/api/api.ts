import axios from 'axios';
import { LogInType } from '../components/Login/Login';
import { PhotosType, ProfileType, UserType } from '../types/types';

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1fca21ab-cbeb-4da3-be6a-980233b7a0f9',
  },
});

type GetUsersResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};
type FollowUserResponseType = {
  resultCode: ResultCodesEnum;
  messages: Array<string>;
  data: any;
};
export const usersAPI = {
  getUsers(currentPage: number, pageLegth: number) {
    return axiosInstance
      .get<GetUsersResponseType>(`users?count=${pageLegth}&page=${currentPage}`)
      .then((res) => res.data);
  },

  followUser(userId: number) {
    return axiosInstance
      .post<FollowUserResponseType>(`follow/${userId}`)
      .then((res) => res.data);
  },

  unfollowUser(userId: number) {
    return axiosInstance.delete(`follow/${userId}`).then((res) => res.data);
  },
};

type GetUserProfileType = ProfileType;
type GetProfileStatusType = string;
type UpdateProfileStatusType = {
  resultCode: ResultCodesEnum;
  messages: Array<string>;
  data: any;
};
type UploadPhotoResponseType = {
  data: {
    photos: PhotosType;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type UpdateProfileInfoResponseType = {
  resultCode: ResultCodesEnum;
  messages: Array<string>;
  data: any;
};
export const profileAPI = {
  getUserProfile(userId: number) {
    return axiosInstance
      .get<GetUserProfileType>(`profile/${userId}`)
      .then((res) => res.data);
  },

  getProfileStatus(userId: number) {
    return axiosInstance
      .get<GetProfileStatusType>(`profile/status/${userId}`)
      .then((res) => res.data);
  },

  updateProfileStatus(status: string) {
    return axiosInstance
      .put<UpdateProfileStatusType>(`profile/status`, {
        status,
      })
      .then((res) => res.data);
  },

  uploadPhoto(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return axiosInstance
      .put<UploadPhotoResponseType>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },

  updateProfileInfo(newProfileInfo: ProfileType) {
    return axiosInstance
      .put<UpdateProfileInfoResponseType>(`/profile`, {
        ...newProfileInfo,
      })
      .then((res) => res.data);
  },
};

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
