import Contact from "@/components/Contact";
import CustomDock from "@/components/CustomDock";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import { Meteors } from "@/components/magicui/meteors";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="lg:w-8/12 md:w-7/12 sm:w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Meteors />
        <Intro />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <CustomDock orientation="vertical" />
      </main>
    </div>
  );
}
