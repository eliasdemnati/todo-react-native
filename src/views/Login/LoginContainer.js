import { connect } from 'react-redux';
import Login from './Login';
import { loginAccountAction } from '../../redux/actions/AccountActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  loginAccount: (email, password) => {
    dispatch(loginAccountAction(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
