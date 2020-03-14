import React from "react";
import { Link } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({})
});

const Nav = props => {
  return (
    <div id="nav">
      <div id="nav-logo"></div>
      <ul id="menu">
        <li>
          <Link to="/assets" className={"nav-button"}>
            <i className="fad fa-user-shield"></i>
            <span>Assets</span>
          </Link>
        </li>
        <li>
          <Link to="/sites" className={"nav-button"}>
            <i className="fad fa-building"></i>
            <span>Sites</span>
          </Link>
        </li>
        <li>
          <Link to="/events" className={"nav-button"}>
            <i className="fad fa-calendar-check"></i>
            <span>Events</span>
          </Link>
        </li>
      </ul>
      <div id="nav-last">
        <a href="" onClick={props.onClickLogout}>
          <i className="fad fa-sign-out"></i>
          Logout
        </a>
      </div>
    </div>
  );
};
export default Nav;
