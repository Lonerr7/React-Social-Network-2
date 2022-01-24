import { connect } from 'react-redux';
import {
  addMessageAC,
  updateNewMessageTextAC,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const dispatchToProps = {
  updateNewMessageText: updateNewMessageTextAC,
  sendMessage: addMessageAC,
};

const DialogsContainer = connect(mapStateToProps, dispatchToProps)(Dialogs);

export default DialogsContainer;
