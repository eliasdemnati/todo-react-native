const initialState = {
  isLogged: false,
  user: null,
};

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      initialState.isLogged = true;
      initialState.user = action.payload;
      return state;
    default:
      return state;
  }
};

export default AccountReducer;
