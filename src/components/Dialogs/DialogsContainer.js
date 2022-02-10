import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { dialogsActions } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const dispatchToProps = {
  updateNewMessageText: dialogsActions.updateNewMessageTextAC,
  sendMessage: dialogsActions.addMessageAC,
};

export default compose(
  connect(mapStateToProps, dispatchToProps),
  withAuthRedirect
)(Dialogs);
