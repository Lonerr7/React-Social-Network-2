import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
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

const AuthRedrirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, dispatchToProps)(AuthRedrirectComponent);

export default DialogsContainer;
