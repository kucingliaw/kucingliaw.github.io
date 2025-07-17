const skillsData: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "PHP",
  "Laravel",
  "MySQL",
  "Flutter",
  "Dart",
];

export default function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-600 px-2 py-1 text-sm text-white rounded-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
