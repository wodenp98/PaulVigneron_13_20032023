import React from "react";
import { Link } from "react-router-dom";

const Unlogged = () => {
  return (
    <div>
      <Link to="/login" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  );
};

export default Unlogged;
