import React, { useState, useEffect } from "react";
import dataAccount from "../data/dataAccount.json";
import Account from "../components/Account";
import Username from "../components/Username";
import Navbar from "../components/Navbar";
import axios from "axios";

const Profile = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/profile",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setLastName(response.data.body.lastName);
        setFirstName(response.data.body.firstName);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <>
      <Navbar firstName={firstName} />
      <main className="main bg-dark">
        <Username firstName={firstName} lastName={lastName} />
        <h2 className="sr-only">Accounts</h2>
        {dataAccount.map((item) => (
          <Account
            key={item.title}
            title={item.title}
            amount={item.amount}
            description={item.description}
            transaction={item.transaction}
          />
        ))}
      </main>
    </>
  );
};

export default Profile;
