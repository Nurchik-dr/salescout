import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Results from "./components/Results/Results";
import Plans from "./components/Plans/Plans";
import TrySection from "./components/TrySection";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <How />
      <Results />
      <Plans />
      <TrySection />
      <Footer />
    </div>
  );
};

export default App;
