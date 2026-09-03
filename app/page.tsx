import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PulseDivider from "@/components/PulseDivider";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PulseDivider animated />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
      </main>
      <ContactFooter />
    </>
  );
}
