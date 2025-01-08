"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export const ProfileSummary: React.FC = () => {
  return (
    <div className="flex w-full justify-between flex-wrap p-4 gap-4">
      <div className="flex flex-col gap-8 max-w-sm lg:max-w-md">
        <div className="w-fit text-2xl text-sky-500">
          <div className="md:text-5xl mb-4 text-3xl">
            <Typewriter
              words={["> Hi, I'm Anzar"]}
              loop={0}
              cursor
              typeSpeed={120}
            />
          </div>
          <p className="text-gray-500">A Software Developer based in India</p>
        </div>
        <p className="lg:text-xl text-lg leading-relaxed text-slate-600">
          I work in IT, focusing on amazing projects and consistently delivering
          top-notch solutions to the clients. Click the{" "}
          <span className="text-blue-400">Information</span> on top to know more
          about me, and feel free to explore my{" "}
          <span className="text-blue-500">projects</span> below.
        </p>
        <p className="lg:text-xl text-lg leading-relaxed text-slate-600">
          I'm currently looking for a new role. Hire me?
        </p>
        <Link
          download
          href="https://drive.google.com/file/d/1t44dUN2hws87oMI60i51QkbqbF4ww1ho/view"
          className="w-full"
          target="_blank"
        >
          <Button className="w-full" variant="default">
            Download Resume
          </Button>
        </Link>
      </div>
      <div className="relative bg-transparent flex  items-center w-full md:w-auto sm:mt-8">
        <div className="image-container border-spacing-5 border-4 bg-transparent overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:rotate-2">
          <Image
            src="/profile-pic.jpg"
            width={200}
            height={200}
            alt="Profile Picture"
            className="object-cover h-48 w-48 md:h-64 md:w-64 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
