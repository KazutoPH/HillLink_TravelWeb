import React from "react";
import Hero from "../components/Hero";
import Camp from "../components/Camp";
import Guide from "../components/Guide";
import Feature from "../components/Feature";
import GetApp from "../components/GetApp";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Camp />
      <Guide />
      <Feature />
      <GetApp />
      <Footer />
    </main>
  );
}

export default Home;
