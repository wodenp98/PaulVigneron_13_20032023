import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../features/userSlice";
import UpdateName from "./UpdateName";

const Username = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, update } = useSelector((state) => state.user);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      {update ? (
        <UpdateName />
      ) : (
        <button
          className="edit-button"
          onClick={() => {
            dispatch(userUpdate());
          }}
        >
          Edit Name
        </button>
      )}
    </div>
  );
};

export default Username;
