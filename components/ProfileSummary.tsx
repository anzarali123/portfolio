import Image from "next/image";
import Typewriter from "./Typewriter"; // Adjust the path as necessary

export const ProfileSummary: React.FC = () => {
  return (
    <div className="flex  w-full justify-between flex-wrap p-4 gap-16">
      <div className="flex flex-col gap-16 max-w-sm lg:max-w-md">
        <Typewriter
          text={`Hi, I'm Anzar.`}
          minTypeSpeed={50}
          maxTypeSpeed={90}
          initDelay={700}
          className="lg:text-2xl text-xl font-bold"
        />
        <p className="lg:text-xl text-lg leading-relaxed text-slate-600">
          I work in IT, focusing on amazing projects and consistently delivering
          top-notch solutions to the clients. Click the{" "}
          <span className="text-blue-400">Information</span> on top right corner
          to learn more about me, and feel free to explore my{" "}
          <span className="text-blue-500">projects</span> below.
        </p>
        <button className="btn bg-black text-white px-6 py-3 w-60 rounded-lg shadow-lg transition-transform duration-300 ease-in-out">
          Download CV
        </button>
      </div>
      <div className="relative bg-transparent">
        <div className="image-container md:items-start bg-transparent rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:rotate-2">
          <Image
            src="/profile-pic.jpeg"
            width={200}
            height={200}
            alt="Profile Picture"
            className="rounded-lg object-contain h-60 w-full"
          />
        </div>
      </div>
    </div>
  );
};
