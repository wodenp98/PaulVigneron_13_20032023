import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Features />
      </main>
    </>
  );
};

export default Home;
