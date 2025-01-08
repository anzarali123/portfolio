import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex gap-5 p-6 w-full mb-16">
      <Link className="mr-auto" href="/">
        AA
      </Link>
      <Link href="/information">Information</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};
