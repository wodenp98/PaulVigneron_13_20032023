import React from "react";
import { useSelector } from "react-redux";

const Username = () => {
  const { firstName, lastName } = useSelector((state) => state.user);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default Username;
