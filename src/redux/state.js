import { renderEntireTree } from '../render';

const state = {
  profilePage: {
    posts: [
      { id: 1, postMessage: 'Hi, how are u', likesCount: 10 },
      { id: 2, postMessage: "It's my first post", likesCount: 10 },
    ],
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

export const addPost = (newPostText) => {
  const newPost = {
    id: 3,
    postMessage: newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

window._state = state;

export default state;
