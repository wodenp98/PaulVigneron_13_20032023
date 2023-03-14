import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Home;
