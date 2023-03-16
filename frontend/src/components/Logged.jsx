import React from "react";
import { Link } from "react-router-dom";

const Logged = () => {
  return (
    <div>
      <Link to="/" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Tony
      </Link>
      <Link to="/" className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );
};

export default Logged;
