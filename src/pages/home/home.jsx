import React from "react";
import Header from "../../components/Home/header";
import Hero from "../../components/Home/hero";
import Data from "../../components/Home/data";
import Footer from "../../components/Home/footer";

export default function Home() {
  return (
    <>
      <main className="bg-black overflow-x-hidden overflow-y-auto">
        <Header />
        <Hero />
        <Data />
      </main>
      <Footer />
    </>
  );
}
