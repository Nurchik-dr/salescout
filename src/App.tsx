import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Advantages from "./components/Advantages/Analitics";
import Tariffs from "./components/Tariffs/Tariffs";
import Reviews from "./components/Reviews/Reviews";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <hr />
      <Hero />
      <hr />
      <Steps />
      <hr />
      <Advantages />
      <hr />
      <Tariffs />
      <hr />
      <Reviews />
      <hr />
      <CTA />
      <hr />
      <Footer />
    </>
  );
};

export default App;
