import {
  addMessageAC,
  updateNewMessageTextAC,
} from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const dialogsPage = store.getState().dialogsPage;

        const updateNewMessageText = (newText) => {
          store.dispatch(updateNewMessageTextAC(newText));
        };

        const sendMessage = () => {
          store.dispatch(addMessageAC());
        };

        return (
          <Dialogs
            updateNewMessageText={updateNewMessageText}
            sendMessage={sendMessage}
            dialogsPage={dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
