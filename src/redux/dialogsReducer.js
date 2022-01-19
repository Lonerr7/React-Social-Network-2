const SEND_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
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
