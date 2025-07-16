interface WorkExperienceItem {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  descrption: string;
}

const WorkExperienceData: WorkExperienceItem[] = [
  {
    startDate: "March 2021",
    endDate: "Mei 2021",
    companyName: "Freya Consulting",
    jobTitle: "Data Admin",
    descrption:
      "Proactively managed and maintained comprehensive customer data for new clients acquired by the sales team at Bank Neo Commerce, ensuring accuracy and integrity for seamless operations.",
  },
  {
    startDate: "March 2022",
    endDate: "Mei 2022",
    companyName: "Educato.ID",
    jobTitle: "Computer Staff",
    descrption:
      "Successfully revitalized and optimized the SMP computer lab, bringing 47 previously non-functional computers back to full operational status and installing a new wired LAN network to support school examinations.",
  },
  {
    startDate: "October 2024",
    endDate: "July 2025",
    companyName: "Billionaire's Project",
    jobTitle: "Shopkeeper",
    descrption:
      "Experienced in managing retail store operations, including sales, inventory, merchandising, and customer service, to achieve optimal sales targets and customer satisfaction.",
  },
];

export default function WorkExperience() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Work Experience</h2>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {WorkExperienceData.map((item, index) => (
            <li className="ms-4 not-last:mb-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.jobTitle} at {item.companyName}
              </h3>
              <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-400">
                {item.descrption}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
