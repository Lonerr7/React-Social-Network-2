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

export type FriendType = {
  id: number;
  name: string;
  avatar: string;
};

export type InitialSidebarStateType = {
  friends: Array<FriendType>;
};

const sidebarReducer = (
  state = initialState,
  action: any
): InitialSidebarStateType => {
  return state;
};

export default sidebarReducer;
