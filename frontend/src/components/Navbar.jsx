import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArgentBankLogo from "../assets/argentBankLogo.png";
import Logged from "./Logged";
import Unlogged from "./Unlogged";

const Navbar = ({ firstName }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

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
      {!isLogged ? <Unlogged /> : <Logged firstName={firstName} />}
    </nav>
  );
};

export default Navbar;
