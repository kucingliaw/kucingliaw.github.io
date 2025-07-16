interface EducationItem {
  startDate: string;
  endDate: string;
  schoolName: string;
  address: string;
  courseName: string;
}

const EducationData: EducationItem[] = [
  {
    startDate: "July 2020",
    endDate: "July 2023",
    schoolName: "Laboratorium I-Tech Vocational High School",
    address: "Jakarta, Indonesia",
    courseName: "Software Engineering",
  },
  {
    startDate: "September 2023",
    endDate: "Present",
    schoolName: "Widyatama University",
    address: "Bandung, Indonesia",
    courseName: "Informatics Engineering",
  },
];

export default function Education() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Education</h2>

      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {EducationData.map((item, index) => (
            <li className="ms-4 not-last:mb-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.courseName} at {item.schoolName}
              </h3>
              <p className="mb-2 text-base text-gray-700">{item.address}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
