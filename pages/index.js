import Head from "next/head";
import Image from "next/image";
import Benifits from "../components/Benifits";
import HeroSection from "../components/HeroSection";
import Instrctor from "../components/Instrctor";
import Navbar from "../components/Navbar";
import PopulerCourses from "../components/PopulerCourses";
import Testimonial from "../components/Testimonial";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Online Eduction| Null | Shubham</title>
      </Head>
      <div className="heroBg">
        <section className="py-10 mx-auto max-w-7xl">
          <Navbar />
          <HeroSection />
        </section>
      </div>
      <div className="mt-20 space-y-40">
        <PopulerCourses />
        <Benifits />
        <Instrctor />
        <Testimonial />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}
