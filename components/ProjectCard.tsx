import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaLaptop } from "react-icons/fa";

export const ProjectCard = ({
  img,
  title,
  description,
  code,
  live,
  builtWith,
}: {
  img: StaticImageData;
  title: string;
  description: string;
  code: string;
  live: string;
  builtWith: string;
}) => {
  return (
    <div className="p-6 cursor-default flex flex-col gap-10 bg-slate-100 ">
      <Image
        className="rounded-xl bg-cover shadow-2xl"
        src={img}
        width={700}
        height={700}
        alt="Project Image"
      />
      <p className="text-slate-700 font-bold tracking-tight md:text-2xl text-xl  bg-slate-100">
        {title}
      </p>
      <p className="text-slate-500 font-normal text-lg  bg-slate-100">
        {description}
      </p>
      <div className=" bg-slate-100 flex gap-5 justify-self-end">
        <Link rel="stylesheet" href={code}>
          {" "}
          <button className="btn flex gap-3 items-center bg-transparent border-2 px-4 md:px-6 py-1 md:py-2 w-fit border-black rounded-full transition-transform duration-300 ease-in-out">
            <FaGithub />
            <span>Code</span>
          </button>
        </Link>
        <Link rel="stylesheet" href={live}>
          {" "}
          <button className="btn flex gap-3   items-center bg-transparent border-2 px-4  md:px-6 py-1 md:py-2 w-fit border-black rounded-full transition-transform duration-300 ease-in-out">
            <FaLaptop />
            <span className="">Live</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
