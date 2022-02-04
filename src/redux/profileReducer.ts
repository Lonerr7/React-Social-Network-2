import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
const DISPLAY_ERROR_MESSAGE = 'DISPLAY_ERROR_MESSAGE';

type PostType = {
  id: number;
  postMessage: string;
  likesCount: number;
};
type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
type PhotosType = {
  small: string | null;
  large: string | null;
};

type PorfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos?: PhotosType;
};

const initialState = {
  posts: [
    { id: 1, postMessage: 'Hi, how are u', likesCount: 10 },
    { id: 2, postMessage: "It's my first post", likesCount: 10 },
  ] as Array<PostType>,
  newPostText: '',
  userProfile: null as PorfileType | null,
  status: '',
  errorMessage: '',
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        postMessage: action.newPost,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPLOAD_PHOTO:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos } as PorfileType,
      };
    case DISPLAY_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST;
  newPost: string;
};
export const addPostAC = (newPost: string): AddPostActionType => ({
  type: ADD_POST,
  newPost,
});

type UpdateNewPostTextActionType = {
  type: typeof UPDATE_NEW_POST_TEXT;
  newText: string;
};
export const updateNewPostTextAC = (
  newText: string
): UpdateNewPostTextActionType => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  userProfile: PorfileType;
};
export const setUserProfileAC = (
  userProfile: PorfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  userProfile,
});

type SetProfileStatusActionType = {
  type: typeof SET_PROFILE_STATUS;
  status: string;
};
export const setProfileStatusAC = (
  status: string
): SetProfileStatusActionType => ({
  type: SET_PROFILE_STATUS,
  status,
});

type UploadPhotoActionType = {
  type: typeof UPLOAD_PHOTO;
  photos: PhotosType;
};
const uploadPhotoAC = (photos: PhotosType): UploadPhotoActionType => ({
  type: UPLOAD_PHOTO,
  photos,
});

type DisplayErrorMessageActionType = {
  type: typeof DISPLAY_ERROR_MESSAGE;
  errorMessage: string;
};
const displayErrorMessageAC = (
  errorMessage: string
): DisplayErrorMessageActionType => ({
  type: DISPLAY_ERROR_MESSAGE,
  errorMessage,
});

export const setUserProfileTC = (userId: number) => async (dispatch: any) => {
  try {
    const response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfileAC(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const getProfileStatusTC = (userId: number) => async (dispatch: any) => {
  try {
    const response = await profileAPI.getProfileStatus(userId);
    dispatch(setProfileStatusAC(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const displayErrorMessageTC =
  (errorMessage: string) => (dispatch: any) => {
    dispatch(displayErrorMessageAC(errorMessage));
    setTimeout(() => {
      dispatch(displayErrorMessageAC(''));
    }, 6000);
  };

export const updateProfileStatusTC =
  (status: string) => async (dispatch: any) => {
    try {
      const response = await profileAPI.updateProfileStatus(status);
      if (response.data.resultCode === 0) dispatch(setProfileStatusAC(status));
      if (response.data.resultCode === 1)
        throw new Error(response.data.messages[0]);
    } catch (error: any) {
      dispatch(displayErrorMessageTC(error.message));
    }
  };

export const uploadPhotoTC = (photo: any) => async (dispatch: any) => {
  try {
    const response = await profileAPI.uploadPhoto(photo);
    console.log(response);

    if (response.data.resultCode === 0)
      dispatch(uploadPhotoAC(response.data.data.photos));
  } catch (error) {}
};

export const updateProfileInfoTC =
  (newProfileInfo: PorfileType, userId: number) => async (dispatch: any) => {
    try {
      const response = await profileAPI.updateProfileInfo(newProfileInfo);

      if (response.data.resultCode === 0) dispatch(setUserProfileTC(userId));
    } catch (error) {
      console.error(error);
    }
  };

export default profileReducer;
