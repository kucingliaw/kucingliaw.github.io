import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Contact</h2>

      <p className="text-base text-gray-700 dark:text-gray-400">
        If you are looking for a Front End Developer to be a part of your team,
        Let&apos;s shake hands with me. Feel free to reach out via email at{" "}
        <Link
          href="mailto:wawal.wiguna@gmail.com"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          {" "}
          wawal.wiguna@gmail.com
        </Link>
      </p>
    </div>
  );
}
