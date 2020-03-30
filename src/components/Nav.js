import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth.actions";

function Nav(props) {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  const selected = props.selected;
  return (
    <div id="nav">
      <div id="nav-logo"></div>
      <ul id="menu">
        <li>
          <Link
            to="/assets"
            className={`nav-button ${selected === "assets" ? "selected" : ""}`}
          >
            <i className="fal fa-user-shield"></i>
            <span>Assets</span>
          </Link>
        </li>
        <li>
          <Link
            to="/sites"
            className={`nav-button ${selected === "sites" ? "selected" : ""}`}
          >
            <i className="fal fa-building"></i>
            <span>Sites</span>
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={`nav-button ${selected === "events" ? "selected" : ""}`}
          >
            <i className="fal fa-calendar-check"></i>
            <span>Events</span>
          </Link>
        </li>
      </ul>
      <div id="nav-last">
        <a href="/" onClick={() => handleLogout()}>
          <i className="fal fa-sign-out"></i>
          Logout
        </a>
      </div>
    </div>
  );
}
export default Nav;
