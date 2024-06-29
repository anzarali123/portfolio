import { Footer } from "@/components/Footer";
import { HorizontalLine } from "@/components/HorizontalLine";
import { Navbar } from "@/components/Navbar";
import { ProfileSummary } from "@/components/ProfileSummary";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <ProfileSummary />
      <HorizontalLine />
      <Projects />
    </>
  );
}
