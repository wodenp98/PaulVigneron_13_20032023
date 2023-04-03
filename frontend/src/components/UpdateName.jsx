import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile, userUpdateProfile } from "../features/thunk";
import { userUpdate } from "../features/userSlice";

const UpdateName = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    dispatch(userUpdateProfile({ firstName, lastName })).then(() => {
      dispatch(userProfile());
    });
  };
  return (
    <section className="sign-in-content">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper black">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="input-wrapper black">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <button type="submit" className="sign-in-button">
          Update
        </button>
      </form>
      <button className="sign-in-button" onClick={() => dispatch(userUpdate())}>
        Cancel
      </button>
    </section>
  );
};

export default UpdateName;
