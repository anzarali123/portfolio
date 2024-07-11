import { HorizontalLine } from "@/components/HorizontalLine";

const Information = () => {
  return (
    <div className="mx-8">
      <h1 className="text-3xl ">About Me</h1>
      <div className="flex flex-col gap-4 mb-12 leading-8 text-gray-500">
        <HorizontalLine />
        <p>
          I currently work as a software developer at Xtranet Technologies (IT
          company based in bhopal, India), where I{"'"}ve been involved in
          creating HR Management System, Srinagar Smart City project and Time
          and Attendance portals for clients like Al Shirawi Group of Companies
          and Alshaya Group of Companies in the UAE.The HR portal includes a
          wide range of features to manage all HR and company-related tasks,
          while the Time and Attendance portal offers employee location tracking
          and other attendance management features and Srinagar smart city
          project involves automating processes such as tax payment, grievance
          registration, bill payments, and waste management, enhancing citizen
          services and operational efficiency. My role involves breaking down
          complex problems, building useful solutions, and experimenting with
          new ideas.
        </p>
        <p>
          My journey into programming began during my engineering studies in
          Electronics and Communication, which I completed in 2021. What started
          as a hobby quickly grew into a passion, steering me away from an MBA
          path I had considered due to my interest in management. Now, I enjoy
          blending my technical skills with my knack for project management.
        </p>
        <p>
          I primarily work with JavaScript and TypeScript, but I have a solid
          foundation that allows me to adapt to other technologies as
          needed.Aside from my work , I also build personal projects to explore
          new ideas and technologies.
        </p>

        <p>
          Outside of coding, I like to keep active by going to the gym and
          playing sports. I also enjoy learning new things and exploring new
          areas.
        </p>
        <p>
          If you want to get in touch, email is the best way to reach me. I{"'"}
          m also quite active on LinkedIn.
        </p>
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
          <span className="font-semibold  text-black"> Bigger bets: </span>
          We should be willing to pass on small opportunities in order to focus
          on potential step changes.
        </li>
        <li>
          <span className="font-semibold  text-black"> Keep it simple: </span>
          Sometimes we have to go into the weeds, but it shouldn
          {"'"}t be the default. If it{"'"}s not the focus, keep it simple.
        </li>
        <li>
          <span className="font-semibold  text-black">
            {" "}
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
