import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="heroBg">
      <section className="py-10 mx-auto  max-w-7xl">
        <Navbar />
        <HeroSection />
      </section>
    </div>
  );
}
