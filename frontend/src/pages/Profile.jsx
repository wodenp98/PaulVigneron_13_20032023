import React from "react";
import dataAccount from "../data/dataAccount.json";
import Account from "../components/Account";
import Username from "../components/Username";

const Profile = () => {
  return (
    <main className="main bg-dark">
      <Username />
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
  );
};

export default Profile;
