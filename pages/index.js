import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PopulerCourses from "../components/PopulerCourses";

export default function Home() {
  return (
    <div>
      <div className="heroBg">
        <section className="py-10 mx-auto max-w-7xl">
          <Navbar />
          <HeroSection />
        </section>
      </div>
      <div className="mx-auto mt-20 max-w-7xl">
        <PopulerCourses />
        <div className="h-screen"></div>
      </div>
    </div>
  );
}
