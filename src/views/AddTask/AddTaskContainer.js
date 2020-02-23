import { connect } from 'react-redux';
import { addTaskAction } from '../../redux/actions/TaskActions';
import AddTask from './AddTask';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addTask: (name, img) => {
    dispatch(addTaskAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
