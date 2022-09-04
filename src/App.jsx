import React from "react";
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
function App() {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Hero />
        <Projects/>
        <Services/>
      </MainLayout>
    </>
  );
}

export default App;
