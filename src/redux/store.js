const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, postMessage: 'Hi, how are u', likesCount: 10 },
        { id: 2, postMessage: "It's my first post", likesCount: 10 },
      ],
      newPostText: '',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Vanya' },
        { id: 2, name: 'Ilya' },
        { id: 3, name: 'Vadim' },
      ],

      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'What is up' },
      ],
      newMessageText: '',
    },

    sidebar: {
      friends: [
        {
          id: 1,
          name: 'Vadim',
          avatar:
            'https://innostudio.de/fileuploader/images/default-avatar.png',
        },
        {
          id: 2,
          name: 'Dima',
          avatar:
            'https://innostudio.de/fileuploader/images/default-avatar.png',
        },
        {
          id: 3,
          name: 'Ilya',
          avatar:
            'https://innostudio.de/fileuploader/images/default-avatar.png',
        },
      ],
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: 3,
          postMessage: this._state.profilePage.newPostText,
          likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case ADD_MESSAGE:
        const newMessage = {
          id: 4,
          message: action.newMessage,
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageText = action.newMessage;
        this._callSubscriber(this._state);
        break;
      default:
        break;
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export const addPostAC = () => ({
  type: ADD_POST,
});

export const updateNewPostTextAC = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

export const addMessageAC = (newMessage) => ({
  type: ADD_MESSAGE,
  newMessage,
});

export const updateNewMessageTextAC = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage,
});

window.store = store;

export default store;
