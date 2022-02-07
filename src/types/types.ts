// import { ThunkAction } from "redux-thunk";
// import { RootStateType } from "../redux/redux-store";

export type PostType = {
  id: number;
  postMessage: string;
  likesCount: number;
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos?: PhotosType;
};

export type UserType = {
  name: string;
  id: number;
  status: string | null;
  photos: PhotosType;
  followed: boolean;
};

// export type ThunkType = ThunkAction<
//   Promise<void>,
//   RootStateType,
//   unknown,
//   ActionTypes
// >;
