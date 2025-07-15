import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 w-9/12">
        <h1 className="text-4xl font-bold">Hi! I&apos;m Wawal</h1>
        <p className="text-base text-gray-700">
          I&apos;m a Front End Developer currently in college at Widyatama
          University, with hands-on experience from various side projects.
          I&apos;m skilled in Next.js, various front-end tools, and have basic
          Flutter knowledge. I&apos;ve successfully designed and developed a
          range of websites and apps end-to-end, and I&apos;m passionate about
          crafting seamless user experiences.
        </p>
      </div>
      <div className="w-3/12 flex items-center justify-center">
        <Image
          src="/images/wawal.jpg"
          alt="Wawal's Picture"
          width={100}
          height={100}
          className="rounded-full aspect-square object-cover w-40 h-40"
        />
      </div>
    </div>
  );
}
