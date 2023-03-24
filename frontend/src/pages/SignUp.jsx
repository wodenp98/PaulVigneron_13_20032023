import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userCreate, userLogin } from "../features/thunk";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    try {
      await dispatch(userCreate({ email, password, firstName, lastName })).then(
        () => {
          dispatch(userLogin({ email, password })).then(() => {
            navigate("/profile");
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>New Account</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="input-wrapper ">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="input-wrapper ">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>

            <button type="submit" className="sign-in-button">
              Create Account
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
