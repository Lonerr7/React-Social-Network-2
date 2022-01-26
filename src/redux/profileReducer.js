import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [
    { id: 1, postMessage: 'Hi, how are u', likesCount: 10 },
    { id: 2, postMessage: "It's my first post", likesCount: 10 },
  ],
  newPostText: '',
  userProfile: null,
};

const profileReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export const addPostAC = (newPost) => ({
  type: ADD_POST,
  newPost,
});

export const updateNewPostTextAC = (newText) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText,
});

export const setUserProfileAC = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const setUserProfileTC = (userId) => async (dispatch) => {
  try {
    const response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfileAC(response.data));
  } catch (error) {
    console.error(error);
  }
};

export default profileReducer;
