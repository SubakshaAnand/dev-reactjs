

export const setIsauthenticated = (isAuthenticated) => {
  return {
    type: 'SET_IS_AUTHENTICATED',
    payload: isAuthenticated,
  };
};


export const login = (username, password) => {
  const token = 'yourAuthTokenHere';

  // Save the authentication token to local storage
  localStorage.setItem('authToken', token);
    return {
      type: 'LOGIN',
      payload: { username, password },
    };
  };
  

  export const logout = () => {
    localStorage.removeItem('authToken');
    return {
      type: 'LOGOUT',
    };
  };
  