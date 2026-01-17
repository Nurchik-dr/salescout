import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Results from "./components/Results/Results";
import Tariffs from "./components/Tariffs/Tariffs";
import TrySection from "./components/TrySection/TrySection";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Reviews from "./components/Reviews/Reviews";

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <How />
        <Results />
        <Tariffs />
        <Reviews />
        <TrySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
