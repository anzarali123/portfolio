import { HorizontalLine } from "@/components/HorizontalLine";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl mb-12">Contact</h1>
      <HorizontalLine />
      <p className="md:text-xl text-md mb-12">
        If you&apos;d like to get in touch, you can reach out to me via any of
        the links below.I am more responsive over email and tend to be pretty
        active on LinkedIn as well.Let me know what&apos;s on your mind!
      </p>
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1 text-xl  md:text-2xl">
        <Link href="mailto:anzarali2021@gmail.com">
          <div className="justify-self-start cursor-pointer">
            <div className="title flex gap-3 items-center ">
              <p>Email</p>
              <MdEmail size={25} />
            </div>
          </div>
        </Link>

        <Link href="https://www.instagram.com/_anzar_ali/">
          <div className="justify-self-start cursor-pointer">
            <div className=" flex gap-3 items-center">
              <p>Instagram</p>
              <FaInstagram size={25} />
            </div>
          </div>
        </Link>
        <Link href="https://github.com/anzarali123">
          <div className="justify-self-start cursor-pointer">
            <div className=" flex gap-3 items-center">
              <p>Github</p>
              <FaGithub size={25} />
            </div>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/anzar-ali/">
          <div className="justify-self-start cursor-pointer">
            <div className=" flex gap-3 items-center">
              <p>LinkedIn</p>
              <FaLinkedin size={25} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Contact;
