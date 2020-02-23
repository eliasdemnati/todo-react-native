const initialState = {
  tasks: [],
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK_SUCCESS':
      return {
        ...state,
      };
    case 'FETCH_TASKS_SUCCESS':
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default TaskReducer;
