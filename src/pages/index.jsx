import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Header } from "./components/Header";
import { Introducer } from "./components/Introducer";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Expierience";
import { WorkIntro } from "./components/WorkIntro";
import { GetInTouch } from "./components/GetInTouch";
import { Footer } from "./components/Footer";
const Home = () => {
  return (
    <div>
      <div className={`${inter.className}`}>
        <Header />
        <Introducer />
        <AboutMe />
        <Skills />
        <Experience />
        <WorkIntro />
        <GetInTouch />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
