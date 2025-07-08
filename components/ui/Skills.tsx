const SkillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "PHP",
  "MySQL",
  "Laravel",
  "Flutter",
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1 p-1">
        {SkillsData.map((item, index) => (
          <div key={index}>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-md text-sm font-semibold mr-2 mb-2">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
