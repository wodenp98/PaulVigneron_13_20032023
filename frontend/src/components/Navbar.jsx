import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArgentBankLogo from "../assets/argentBankLogo.png";
import Logged from "./Logged";
import Unlogged from "./Unlogged";

const Navbar = ({ firstName, isLogged }) => {
  const location = useLocation();
  console.log(isLogged);
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
      {/* state isLogged? */}
      {location.pathname === "/profile" ? (
        <Logged firstName={firstName} />
      ) : (
        <Unlogged />
      )}
    </nav>
  );
};

export default Navbar;
