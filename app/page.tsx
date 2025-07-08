import Intro from "@/components/ui/Intro";
import { Meteors } from "@/components/magicui/meteors";
import WorkExperience from "@/components/ui/WorkExperience";
import Education from "@/components/ui/Education";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="lg:w-7/12 mx-auto items-center justify-items-center min-h-screen px-8 pt-8 gap-16 sm:px-20 sm:pt-20 font-[family-name:var(--font-geist-sans)]">
      <Meteors />
      <main className="sm:flex sm:flex-col gap-[40px] row-start-2 items-center sm:items-start">
        <Intro />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
