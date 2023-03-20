import React from "react";
import { useNavigate } from "react-router-dom";

const Logged = ({ firstName }) => {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        {firstName}
      </div>
      <div onClick={logout} className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </div>
    </div>
  );
};

export default Logged;
