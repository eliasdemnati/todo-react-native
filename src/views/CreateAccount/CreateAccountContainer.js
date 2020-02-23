import { connect } from 'react-redux';
import { createAccountAction } from '../../redux/actions/AccountActions';
import CreateAccount from './CreateAccount';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  createAccount: (email, password, displayName) => {
    dispatch(createAccountAction(email, password, displayName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
