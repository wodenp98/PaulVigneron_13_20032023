import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../features/userSlice";

const Logged = () => {
  const dispatch = useDispatch();
  const { firstName } = useSelector((state) => state.user);
  let navigate = useNavigate();

  const logout = () => {
    dispatch(userLogout());
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
