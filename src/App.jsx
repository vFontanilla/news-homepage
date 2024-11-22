import React from "react";
import Headerpage from "./components/header";
import HeroPage from "./components/Hero";

function App() {
  return (
    <div className="px-6 py-5 h-screen">
      <Headerpage />
      <HeroPage />
    </div>
  );
}

export default App;
