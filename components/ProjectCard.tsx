import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Laptop } from "lucide-react";

export const ProjectCard = ({
  img,
  title,
  description,
  code,
  live,
}: {
  img: StaticImageData;
  title: string;
  description: string;
  code: string;
  live: string;
}) => {
  return (
    <div className="p-6 h-full transition group self-stretch cursor-default flex flex-col gap-10 hover:bg-slate-200 rounded-2xl bg-slate-100 ">
      <Image
        className="rounded-xl bg-cover  shadow-xl"
        src={img}
        width={700}
        height={700}
        alt="Project Image"
      />
      <p className="text-slate-700 font-semibold  tracking-tight  text-xl group-hover:bg-slate-200 transition bg-slate-100">
        {title}
      </p>
      <p className="text-slate-500 font-normal text-base  group-hover:bg-slate-200 transition bg-slate-100">
        {description}
      </p>
      <div className=" bg-slate-100 flex gap-5  group-hover:bg-slate-200 transition justify-self-end">
        <Link
          target="_blank"
          rel="stylesheet"
          className=" group-hover:bg-slate-200 transition bg-slate-100"
          href={code}
        >
          {" "}
          <Button variant="default">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
        </Link>
        <Link
          target="_blank"
          className=" group-hover:bg-slate-200 transition bg-slate-100"
          rel="stylesheet"
          href={live}
        >
          {" "}
          <Button variant="default">
            <Laptop className="mr-2 h-4 w-4" />
            Live
          </Button>
        </Link>
      </div>
    </div>
  );
};
