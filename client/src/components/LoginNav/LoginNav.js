import React from 'react';
import { Link } from 'react-router-dom'
import UserIcon from '../Icons/UserIcon';
import LogOutIcon from '../Icons/LogOutIcon';
const LoginNav = (props) => 
        props.loggedIn ? 
          <div className="nav-item ml-auto">
            <span className="text-light ml-2 nav-user"><UserIcon /><span className="nav-button-spacing"></span>{props.username}</span>
            <button className="btn btn-outline-light ml-2 nav-user" onClick={props.logOut} type="button"><LogOutIcon /><span className="nav-button-spacing">Logout</span></button> 
          </div>
          :
          (<div className="nav-item ml-auto">
              <Link to="/signup"><button className="btn btn-sm  btn-outline-light" type="button">Signup</button></Link>
              <Link to="/login"><button className="btn  btn-sm btn-outline-light" type="button">Login</button></Link>
          </div>);

export default LoginNav;