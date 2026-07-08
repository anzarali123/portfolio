"use client";
import { HorizontalLine } from "@/components/HorizontalLine";
import Image from "next/image";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineData = [
  {
    company: "Liminal Custody",
    logo: "https://assets.lmnl.app/icons/liminal-email-logo.png",
    website: "https://liminalcustody.com/",
    role: "Software Engineer, Full Stack",
    duration: "Sep 2025 – Present",
    location: "Hyderabad, India",
    description:
      "Working on the backend of a wallet infrastructure platform used by banks and enterprises. My work spans cross-chain swap integrations, transaction signing flows, EVM speed-up logic, and contributing to the blockchain parser and MPC signer service.",
  },
  {
    company: "Aerchain",
    logo: "https://s3.amazonaws.com/aerchain-assets/aerchain_dark.png",
    website: "https://www.aerchain.io/",
    role: "Software Development Engineer I, Full Stack",
    duration: "Aug 2024 – Aug 2025",
    location: "Bengaluru, India",
    description:
      "Worked on a B2B procurement platform as a full-stack engineer. Built RESTful APIs, a real-time vendor auction flow using WebSockets, and frontend components across procurement modules including invoices, POs, RFQs, and requisitions.",
  },
  {
    company: "Xtranet Technologies",
    logo: "https://xtranetindia.com/assets/img/xtranet-technologiespvt-ltd-logo.png",
    website: "https://xtranetindia.com/",
    role: "React.js Developer",
    duration: "Feb 2023 – Jul 2024",
    location: "Bhopal, India",
    description:
      "Started my career here as a React.js developer. Built modules for an HR Management System and Time & Attendance portal, and contributed to the Srinagar Smart City project under the Government of India.",
  },
];

const Information = () => {
  return (
    <div className="mx-8">
      <h1 className="text-3xl ">About Me</h1>
      <div className="flex flex-col gap-4 mb-12 leading-8 text-gray-500">
        <HorizontalLine />
        <p>
          Hi there, I&apos;m Anzar! learning about shipping great products,
          becoming a better developer, and growing a career in tech.
        </p>
        <p>
          I am a software developer with a passion for problem-solving and
          creating impactful solutions. My programming journey began during my
          undergraduate studies, where I built a solid foundation in technology.
          I hold a Bachelor&apos;s degree in Electronics and Communication, completed in 2021.
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

      <VerticalTimeline lineColor="#e5e7eb">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={`${item.duration} · ${item.location}`}
            iconStyle={{ background: "#fff", boxShadow: "0 0 0 4px #e5e7eb" }}
            icon={
              <div className="flex items-center justify-center w-full h-full p-1.5">
                <Image
                  src={item.logo}
                  width={32}
                  height={32}
                  alt={`${item.company} logo`}
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML =
                      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>';
                  }}
                />
              </div>
            }
            contentStyle={{
              background: "#fff",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.07)",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
            contentArrowStyle={{ borderRight: "7px solid #e5e7eb" }}
          >
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-500 hover:underline leading-tight"
                >
                  {item.company}
                </a>
                <p className="text-gray-700 font-medium mt-0.5">{item.role}</p>
              </div>
              {index === 0 && (
                <span className="text-xs bg-green-50 text-green-600 border border-green-200 px-2 py-0.5 rounded-full font-medium">
                  Current
                </span>
              )}
            </div>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

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
          "Put a ding in the universe. Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking."
        }{" "}
        — <span className="text-blue-500">Steve Jobs</span>
      </div>
    </div>
  );
};

export default Information;
