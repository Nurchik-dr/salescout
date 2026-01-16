import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Results from "./components/Results/Results";
import Tariffs from "./components/Tariffs/Tariffs";
import TrySection from "./components/TrySection/TrySection";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <How />
      <Results />
      <Tariffs />
      <TrySection />
      <Footer />
    </>
  );
};

export default App;
