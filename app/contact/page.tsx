import { HorizontalLine } from "@/components/HorizontalLine";
import { Github, Instagram, Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mx-8">
      <h1 className="text-3xl mb-6">Contact</h1>
      <HorizontalLine />
      <p className="md:text-xl text-base mb-12 text-gray-500">
        If you&apos;d like to get in touch, you can reach out to me via any of
        the links below.I am more responsive over email and tend to be pretty
        active on LinkedIn as well.Let me know what&apos;s on your mind!
      </p>
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1 text-sm  md:text-xl ">
        <Link href="mailto:anzarali2021@gmail.com">
          <div className="justify-self-start cursor-pointer">
            <div className="title flex gap-3 items-center ">
              <p>Email</p>
              <MailIcon size={25} />
            </div>
          </div>
        </Link>

        <Link href="https://www.instagram.com/_anzar_ali/">
          <div className="justify-self-start cursor-pointer">
            <div className=" flex gap-3 items-center">
              <p>Instagram</p>
              <Instagram size={25} />
            </div>
          </div>
        </Link>
        <Link href="https://github.com/anzarali123">
          <div className="justify-self-start cursor-pointer">
            <div className=" flex gap-3 items-center">
              <p>Github</p>
              <Github size={25} />
            </div>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/anzar-ali/">
          <div className="justify-self-start cursor-pointer">
            <div className=" flex gap-3 items-center">
              <p>LinkedIn</p>
              <Linkedin size={25} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Contact;
