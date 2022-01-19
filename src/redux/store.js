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
      case 'ADD_POST':  
        const newPost = {
          id: 3,
          postMessage: this._state.profilePage.newPostText,
          likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      case 'UPDATE_NEW_POST_TEXT':
        this._state.profilePage.newPostText = action.newText;
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

window.store = store;

export default store;
