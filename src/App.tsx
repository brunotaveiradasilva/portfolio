import { Splash } from "./components/Splash";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Splash />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
