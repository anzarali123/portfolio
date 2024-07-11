import Link from "next/link";
import { HorizontalLine } from "./HorizontalLine";

export const Footer = () => {
  const date = new Date();

  return (
    <div className="mx-8">
      <HorizontalLine />
      <div className="flex justify-between py-10 text-gray-500 md:text-sm text-xs">
        <p> Anzar Ali&copy;{date.getFullYear()}</p>
        <Link href="https://github.com/anzarali123/portfolio">View Source</Link>
      </div>
    </div>
  );
};
