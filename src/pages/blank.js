import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function Blank() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default Blank;
