import { connect } from 'react-redux';
import Login from './Login';
import { loginAccountAction } from '../../redux/actions/AccountActions';

const mapStateToProps = state => ({
  isLogged: state.account.isLogged,
});

const mapDispatchToProps = dispatch => ({
  loginAccount: (email, password) => {
    dispatch(loginAccountAction(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
