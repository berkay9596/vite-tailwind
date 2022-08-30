import React from "react";
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Hero />
      </MainLayout>
    </>
  );
}

export default App;
