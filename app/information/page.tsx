import { HorizontalLine } from "@/components/HorizontalLine";
import Image from "next/image";
import Link from "next/link";

const Information = () => {
  const timelineData = [
    {
      company: "AERCHAIN",
      logo: "https://s3.amazonaws.com/aerchain-assets/aerchain_dark.png",
      role: "Full Stack Developer",
      duration: "August 2024 - Present",
      location: "Bengaluru, India",
      description: [
        "Working as a Full Stack Developer, involved in developing both frontend and backend features for our AI-powered procurement platform. My role includes designing user-friendly interfaces and implementing robust RESTful APIs by leveraging ReactJS, Node.js, PostgreSQL and other web technologies.",
        "Writing clean, maintainable code and continuously learning to meet the evolving needs of users and the business.",
      ],
    },
    {
      company: "Xtranet Technologies",
      logo: "https://xtranetindia.com/assets/img/xtranet-technologiespvt-ltd-logo.png",
      role: "ReactJS Developer",
      duration: "Feb 2023 - July 2024",
      location: "Bhopal, India",
      description: [
        "I worked on developing key modules for projects like the HR Management System, Time and Attendance portals, and the Srinagar Smart City project.I built features to simplify HR tasks, improve employee location tracking, and streamline attendance management using ReactJS and other web technologies, ensuring smooth functionality and reliable performance. In the Srinagar Smart City project, I contributed to automating services like tax payments and grievance handling to make operations more efficient and user-friendly.",
        "Throughout these projects, I focused on writing clean and maintainable code, learning from challenges, and delivering practical solutions.",
      ],
    },
  ];
  return (
    <div className="mx-8">
      <h1 className="text-3xl ">About Me</h1>
      <div className="flex flex-col gap-4 mb-12 leading-8 text-gray-500">
        <HorizontalLine />
        <p>
          Hi there, I'm Anzar! learning about shipping great products, becoming
          a better developer, and growing a career in tech.
        </p>
        <p>
          I am a software developer with a passion for problem-solving and
          creating impactful solutions. My programming journey began during my
          undergraduate studies, where I built a solid foundation in technology
          . I hold a Bachelor's degree in Electronics and Communication from{" "}
          <Link
            className="hover:underline text-blue-500"
            href="https://lnct.ac.in/"
          >
            Lakshmi Narain College of Technology, Bhopal
          </Link>
          , completed in 2021.
        </p>

        <p>
          I primarily work with JavaScript and TypeScript, but I have a strong
          foundation in various technologies, allowing me to adapt and learn new
          tools as needed. Alongside my work, I work on personal projects that
          challenge myself and keep up with the latest advancements and trends
          in tech.
        </p>
        <p>
          If you want to get in touch, Email is the best way to reach me. I{"'"}
          m also quite active on LinkedIn.
        </p>
      </div>
      <h1 className="text-3xl">Career Highlights</h1>
      <HorizontalLine />
      <div className="relative mt-8">
        <div className="border-l-4 border-gray-300 absolute h-full left-8"></div>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex items-start mb-12 relative"
            style={{ marginLeft: index % 2 === 0 ? "8px" : "0px" }}
          >
            {/* Company Logo */}
            <div className="w-24 h-24 bg-white p-2 rounded-2xl shadow-md flex justify-center items-center">
              <a
                href={
                  item.company === "AERCHAIN"
                    ? "https://www.aerchain.io/"
                    : "https://xtranetindia.com/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.logo}
                  width={48}
                  height={48}
                  alt={`${item.company} logo`}
                />
              </a>
            </div>

            {/* Information */}
            <div className="ml-8 flex-1">
              <h2 className="text-xl font-semibold">
                <a
                  href={
                    item.company === "AERCHAIN"
                      ? "https://www.aerchain.io/"
                      : "https://xtranetindia.com/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-blue-500 hover:underline"
                >
                  {item.company}
                </a>
              </h2>
              <p className="text-gray-600 italic">{item.role}</p>
              <p className="text-gray-500 text-sm">
                {item.duration} | {item.location}
              </p>
              <div className="text-gray-500 mt-2">
                {item.description.map((desc, idx) => (
                  <p className="mb-2" key={idx}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl">Principles</h1>
      <HorizontalLine />
      <ul className="list-disc flex flex-col gap-4 leading-8 text-gray-500">
        <li>
          <span className="font-semibold text-black">
            Bias towards action:{" "}
          </span>
          Getting started is the best way to begin making progress and start
          learning. Avoid unchecked inaction.
        </li>
        <li>
          <span className="font-semibold text-black"> Bigger bets: </span>
          We should be willing to pass on small opportunities in order to focus
          on potential step changes.
        </li>
        <li>
          <span className="font-semibold text-black"> Keep it simple: </span>
          Sometimes we have to go into the weeds, but it shouldn
          {"'"}t be the default. If it{"'"}s not the focus, keep it simple.
        </li>
        <li>
          <span className="font-semibold text-black">
            Opinions are useful:{" "}
          </span>
          Both people and products should be opinionated. Taking a stance helps
          move the conversation forward.
        </li>
      </ul>

      <h1 className="text-3xl mt-12">Favorite Quote</h1>
      <HorizontalLine />
      <div className="bg-slate-200 py-8 px-4 border-l-4 border-l-black leading-8 text-gray-500">
        {
          "Put a ding in the universe. Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking."
        }{" "}
        — <span className="text-blue-500">Steve Jobs</span>
      </div>
    </div>
  );
};

export default Information;
