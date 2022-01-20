const initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
