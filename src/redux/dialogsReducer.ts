import { InferActionTypes } from './redux-store';

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
type ActionTypes = InferActionTypes<typeof dialogsActions>;

const dialogsReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };

    case 'UPDATE_NEW_MESSAGE_TEXT':
      return { ...state, newMessageText: action.newMessage };
    default:
      return state;
  }
};

export const dialogsActions = {
  addMessageAC: () =>
    ({
      type: 'ADD_MESSAGE',
    } as const),
  updateNewMessageTextAC: (newMessage: string) =>
    ({
      type: 'UPDATE_NEW_MESSAGE_TEXT',
      newMessage,
    } as const),
};

export default dialogsReducer;
