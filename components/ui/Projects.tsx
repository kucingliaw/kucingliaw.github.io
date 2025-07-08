import Link from "next/link";
import { Button } from "./button";

interface Project {
  title: string;
  description: string;
  link: string;
  code: string;
  previewVideo: string;
  technologies: string[];
}

const PorjectsData: Project[] = [
  {
    title: "WanderLog",
    description: "Travel Journal App",
    link: "https://example.com/project-one",
    code: "https://github.com/kucingliaw/traveljournal",
    previewVideo: "/videos/wanderlog.mp4",
    technologies: ["Flutter", "Dart", "Supabase"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="sm:grid grid-cols-2 gap-4">
        {PorjectsData.map((item, index) => (
          <div key={index} className="flex flex-col border rounded-lg">
            <video
              src={item.previewVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full rounded-t-lg"
            />
            <div className="flex flex-col gap-3 p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-gray-200 dark:text-gray-700 rounded-full px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Link href={item.link} target="_blank">
                  <Button variant="default" className="cursor-pointer">
                    View
                  </Button>
                </Link>
                <Link href={item.code} target="_blank">
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
};

export default Projects;
