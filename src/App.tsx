import { Navbar } from "./layout/Navbar";
import { Abouts } from "./sections/Abouts";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Abouts />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
