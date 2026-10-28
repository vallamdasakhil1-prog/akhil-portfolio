import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Capabilities />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
