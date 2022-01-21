const SEND_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newMessage };
    default:
      return state;
  }
};

export const addMessageAC = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageTextAC = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage,
});

export default dialogsReducer;
