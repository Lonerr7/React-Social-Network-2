const SEND_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: 'Vanya' },
    { id: 2, name: 'Ilya' },
    { id: 3, name: 'Vadim' },
  ] as Array<DialogType>,

  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'What is up' },
  ] as Array<MessageType>,
  newMessageText: '',
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
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

type ActionTypes = AddMessageActionType | UpdateNewMessageTextActionType;

type AddMessageActionType = {
  type: typeof SEND_MESSAGE;
};
export const addMessageAC = (): AddMessageActionType => ({
  type: SEND_MESSAGE,
});

type UpdateNewMessageTextActionType = {
  type: typeof UPDATE_NEW_MESSAGE_TEXT;
  newMessage: string;
};
export const updateNewMessageTextAC = (
  newMessage: string
): UpdateNewMessageTextActionType => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage,
});

export default dialogsReducer;
