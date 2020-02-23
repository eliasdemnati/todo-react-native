const initialState = {
  isLogged: false,
  user: null,
};

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default AccountReducer;
