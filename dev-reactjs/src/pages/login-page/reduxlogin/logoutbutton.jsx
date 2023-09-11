import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './actions';
import { Button } from '@material-tailwind/react';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <Button onClick={handleLogout} size='lg'>Logout</Button>;
};

export default LogoutButton;
