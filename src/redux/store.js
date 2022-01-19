import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;

export default store;
