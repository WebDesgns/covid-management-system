import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth';

export function IsUserRedirect() {
  const {user} = useAuth()
  const location = useLocation();
 
  return (
    user ? <Navigate to={{pathname: `/${user?.photoURL}`}} state={{ from: location }} replace /> : <Outlet />
  )
}

function RequireAuth({ role }) {
  const {user} = useAuth()
  const location = useLocation();

  return (
    user ? (( user?.photoURL === role) ? <Outlet /> : <Navigate to={user?.photoURL} />)
      : <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default RequireAuth;

