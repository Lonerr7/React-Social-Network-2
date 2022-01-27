import { connect } from 'react-redux';
import { compose } from 'redux';
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

export default compose(
  connect(mapStateToProps, dispatchToProps),
  withAuthRedirect
)(Dialogs);
