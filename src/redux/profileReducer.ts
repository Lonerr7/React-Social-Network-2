import { ThunkAction } from 'redux-thunk';
import { profileAPI, ResultCodesEnum } from '../api/api';
import { PostType, ProfileType, PhotosType } from '../types/types';
import { InferActionTypes, RootStateType } from './redux-store';

const initialState = {
  posts: [
    { id: 1, postMessage: 'Hi, how are u', likesCount: 10 },
    { id: 2, postMessage: "It's my first post", likesCount: 10 },
  ] as Array<PostType>,
  newPostText: '',
  userProfile: null as ProfileType | null,
  status: '',
  errorMessage: '',
};

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof profileActions>;

const profileReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'ADD_POST':
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
    case 'UPDATE_NEW_POST_TEXT':
      return {
        ...state,
        newPostText: action.newText,
      };
    case 'SET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case 'SET_PROFILE_STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'UPLOAD_PHOTO':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.photos,
        } as ProfileType,
      };
    case 'DISPLAY_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export const profileActions = {
  addPostAC: (newPost: string) =>
    ({
      type: 'ADD_POST',
      newPost,
    } as const),

  updateNewPostTextAC: (newText: string) =>
    ({
      type: 'UPDATE_NEW_POST_TEXT',
      newText,
    } as const),

  setUserProfileAC: (userProfile: ProfileType) =>
    ({
      type: 'SET_USER_PROFILE',
      userProfile,
    } as const),

  setProfileStatusAC: (status: string) =>
    ({
      type: 'SET_PROFILE_STATUS',
      status,
    } as const),

  uploadPhotoAC: (photos: PhotosType) =>
    ({
      type: 'UPLOAD_PHOTO',
      photos,
    } as const),

  displayErrorMessageAC: (errorMessage: string) =>
    ({
      type: 'DISPLAY_ERROR_MESSAGE',
      errorMessage,
    } as const),
};

type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  ActionTypes
>;

export const setUserProfileTC =
  (userId: number): ThunkType =>
  async (dispatch) => {
    try {
      const data = await profileAPI.getUserProfile(userId);
      dispatch(profileActions.setUserProfileAC(data));
    } catch (error) {
      console.error(error);
    }
  };

export const getProfileStatusTC =
  (userId: number): ThunkType =>
  async (dispatch) => {
    try {
      const data = await profileAPI.getProfileStatus(userId);
      dispatch(profileActions.setProfileStatusAC(data));
    } catch (error) {
      console.error(error);
    }
  };

export const displayErrorMessageTC =
  (errorMessage: string): ThunkType =>
  async (dispatch) => {
    dispatch(profileActions.displayErrorMessageAC(errorMessage));
    setTimeout(() => {
      dispatch(profileActions.displayErrorMessageAC(''));
    }, 6000);
  };

export const updateProfileStatusTC =
  (status: string): ThunkType =>
  async (dispatch) => {
    try {
      const data = await profileAPI.updateProfileStatus(status);
      if (data.resultCode === ResultCodesEnum.Success)
        dispatch(profileActions.setProfileStatusAC(status));
      if (data.resultCode === ResultCodesEnum.Error)
        throw new Error(data.messages[0]);
    } catch (error: any) {
      dispatch(displayErrorMessageTC(error.message));
    }
  };

export const uploadPhotoTC =
  (photo: any): ThunkType =>
  async (dispatch) => {
    try {
      const data = await profileAPI.uploadPhoto(photo);

      if (data.resultCode === ResultCodesEnum.Success)
        dispatch(profileActions.uploadPhotoAC(data.data.photos));
    } catch (error) {
      console.error(error);
    }
  };

export const updateProfileInfoTC =
  (newProfileInfo: ProfileType, userId: number): ThunkType =>
  async (dispatch) => {
    try {
      const data = await profileAPI.updateProfileInfo(newProfileInfo);

      if (data.resultCode === ResultCodesEnum.Success)
        dispatch(setUserProfileTC(userId));
    } catch (error) {
      console.error(error);
    }
  };

export default profileReducer;
