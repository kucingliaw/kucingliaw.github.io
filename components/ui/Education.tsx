interface EducationItem {
  startDate: string;
  endDate: string;
  schoolName: string;
  courseName: string;
  address?: string; // Optional field for address
}

const EducationData: EducationItem[] = [
  {
    startDate: "July 2020",
    endDate: "July 2023",
    schoolName: "Laboratorium I-Tech High School",
    courseName: "Software Engineering",
    address: "Jakarta, Indonesia",
  },
  {
    startDate: "September 2023",
    endDate: "Present",
    schoolName: "Widyatama University",
    courseName: "Informatics Engineering",
    address: "Bandung, Indonesia",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Education</h2>

      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {EducationData.map((item, index) => (
            <li key={index} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.courseName} at {item.schoolName}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">
                {item.address}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;
