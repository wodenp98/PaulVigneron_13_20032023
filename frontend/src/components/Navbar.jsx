import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArgentBankLogo from "../assets/argentBankLogo.png";
import Logged from "./Logged";
import Unlogged from "./Unlogged";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!isAuthenticated ? <Unlogged /> : <Logged />}
    </nav>
  );
};

export default Navbar;
