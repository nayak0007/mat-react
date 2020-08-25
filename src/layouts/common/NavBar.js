import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        Tech Trend
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>

        {props.showModeratorBoard && (
          <li className="nav-item">
            <Link to={"/mod"} className="nav-link">
              Moderator Board
            </Link>
          </li>
        )}

        {props.showAdminBoard && (
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Admin Board
            </Link>
          </li>
        )}

        {props.currentUser && (
          <li className="nav-item">
            <Link to={"/user"} className="nav-link">
              User
            </Link>
          </li>
        )}
      </div>

      {props.currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              {props.currentUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={props.logOut}>
              LogOut
            </a>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
