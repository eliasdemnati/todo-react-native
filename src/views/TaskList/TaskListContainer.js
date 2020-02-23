import { connect } from 'react-redux';
import { fetchListAction, markAsDoneAction } from '../../redux/actions/TaskActions';
import TaskList from './TaskList';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchList: () => {
    dispatch(fetchListAction());
  },
  markAsDone: () => {
    dispatch(markAsDoneAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
