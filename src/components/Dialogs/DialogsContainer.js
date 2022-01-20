import { connect } from 'react-redux';
import {
  addMessageAC,
  updateNewMessageTextAC,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewMessageText: (newText) => {
    dispatch(updateNewMessageTextAC(newText));
  },
  sendMessage: () => {
    dispatch(addMessageAC());
  },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
