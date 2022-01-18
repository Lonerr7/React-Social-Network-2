const state = {
  profilePage: {
    posts: [
      { id: 1, postMessage: 'Hi, how are u' },
      { id: 2, postMessage: "It's my first post" },
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

export default state;
