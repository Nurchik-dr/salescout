import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Results from "./components/Results/Results";
import Tariffs from "./components/Tariffs/Tariffs";
import TrySection from "./components/TrySection/TrySection";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", e.clientX + "px");
      document.documentElement.style.setProperty("--y", e.clientY + "px");
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div className="spotlight"></div>
      <div className="app-content">
        <Header />
        <Hero />
        <How />
        <Results />
        <Tariffs />
        <TrySection />
        <Footer />
      </div>
    </>
  );
};

export default App;
