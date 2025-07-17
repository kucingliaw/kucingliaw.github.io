import Link from "next/link";
import { Button } from "./ui/button";
// sadsadada

interface Project {
  title: string;
  description: string;
  link?: string;
  code: string;
  previewVideo: string;
  tech: string[];
}

const projectsData: Project[] = [
  {
    title: "WanderLog - Travel Journal",
    description:
      "A travel journal app to document and share travel experiences.",
    code: "https://github.com/kucingliaw/traveljournal",
    previewVideo: "/videos/wanderlog.mp4",
    tech: ["Flutter", "Dart", "Supabase"],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-100 dark:border-gray-800 shadow-sm rounded-md"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              className="w-full h-full rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-600 px-2 py-1 text-sm text-white rounded-lg"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                {project.link && (
                  <Link href={project.link} target="_blank">
                    <Button variant="default" className="cursor-pointer">
                      View
                    </Button>
                  </Link>
                )}
                <Link href={project.code} target="_blank">
                  <Button variant="outline" className="cursor-pointer">
                    Code
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
