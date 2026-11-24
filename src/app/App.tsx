import { Splash } from "./Splash";
import { Nav } from "./Nav";
import { Hero } from "../sections/Hero";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Education } from "../sections/Education";
import { Contact } from "../sections/Contact";
import { Resume } from "../sections/Resume";
import { Footer } from "./Footer";

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
