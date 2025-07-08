"use client";

import Image from "next/image";

import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-5">
      <div className="flex flex-col gap-4 sm:w-9/12">
        <h1 className="text-4xl font-bold">Hi, I am Wawal</h1>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Freelance Front End Developer based in Bandung, Indonesia. If you are
          looking for a Front End Developer to be a part of your team,
          Let&apos;s shake hands with me.
        </p>
      </div>
      <div className="sm:w-3/12">
        <Image
          src="/images/wawa.jpg"
          alt="Wawal"
          width={100}
          height={100}
          className="rounded-full aspect-square object-cover shadow-lg h-36 w-36 mx-auto"
        />
      </div>
    </div>
  );
};

export default Intro;
