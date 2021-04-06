import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import s from '../UserMenu/UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/authorization/authorization-selectors';
import { logOut } from '../../redux/authorization/authorization-operations';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  // const nameInAvatar = userName[0].toUpperCase();
  const nameInAvatar = 'U';

  return (
    <div>
      <NavLink exact to="/home" className={s.link}>
        Home
      </NavLink>
      <NavLink exact to="/usefulinfo" className={s.link}>
        Materials
      </NavLink>
      <Avatar>{nameInAvatar}</Avatar>
      <button onClick={() => dispatch(logOut())}>log out img</button>
    </div>
  );
}
