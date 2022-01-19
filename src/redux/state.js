let renderEntireTree = () => {};

const state = {
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
        avatar: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      },
      {
        id: 2,
        name: 'Dima',
        avatar: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      },
      {
        id: 3,
        name: 'Ilya',
        avatar: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      },
    ],
  },
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const addPost = () => {
  const newPost = {
    id: 3,
    postMessage: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

window._state = state;

export default state;
