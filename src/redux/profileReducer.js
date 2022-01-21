const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  posts: [
    { id: 1, postMessage: 'Hi, how are u', likesCount: 10 },
    { id: 2, postMessage: "It's my first post", likesCount: 10 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        postMessage: state.newPostText,
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
    default:
      return state;
  }
};

export const addPostAC = () => ({
  type: ADD_POST,
});

export const updateNewPostTextAC = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

export default profileReducer;
