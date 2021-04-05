import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <>
      <NavLink exact to="/home">
        Logo
      </NavLink>
    </>
  );
}
