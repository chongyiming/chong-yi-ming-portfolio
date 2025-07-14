"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Services /> */}
      <Work />
      <Footer />
    </>
  );
}
