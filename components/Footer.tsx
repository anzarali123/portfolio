import Link from "next/link";
import { HorizontalLine } from "./HorizontalLine";

export const Footer = () => {
  return (
    <>
      <HorizontalLine />
      <div className="flex justify-between py-10 text-gray-500">
        <p>Made by Anzar Ali @2024</p>
        <Link href="https://github.com/anzarali123/portfolio">View Source</Link>
      </div>
    </>
  );
};
