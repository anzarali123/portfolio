import { ProjectCard } from "./ProjectCard";
import data from "@/public/assets/projects/data";
export const Projects = () => {
  return (
    <div className="mx-8">
      <h1 className="text-3xl mb-5 font-medium">Personal Projects</h1>
      <p className="text-gray-500 text-xl">
        Below is a selection of recent projects that I&apos;ve worked on.
      </p>
      <div className="grid md:grid-cols-2  grid-cols-1  mt-12 gap-12  justify-center">
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <ProjectCard
                img={item.img}
                title={item.title}
                description={item.description}
                code={item.code}
                live={item.live}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
