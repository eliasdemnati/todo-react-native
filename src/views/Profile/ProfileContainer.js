import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = state => ({
  displayName: state.account.user.displayName,
  email: state.account.user.email,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
