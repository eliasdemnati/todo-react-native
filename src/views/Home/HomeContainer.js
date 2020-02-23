import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => ({
  isLogged: state.account.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
