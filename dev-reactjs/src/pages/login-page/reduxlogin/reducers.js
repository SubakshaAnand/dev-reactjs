const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case 'LOGIN':
      // Replace with your actual authentication logic
      if (action.payload.username === 'adminuser@gmail.com' && action.payload.password === 'password1234') {
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.username,
        };
      }

    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
