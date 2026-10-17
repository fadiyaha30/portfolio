import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip fixed -top-20 left-5 bg-[white] z-[10] p-3 focus:top-[0.625rem]" href="#main">Skip to content</a>
      <Header />
      <main className="max-w-225 m-auto inset:mx-[8%]" id="main">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
