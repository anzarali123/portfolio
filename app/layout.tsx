import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anzar Ali | Full Stack Developer",
  description:
    "Full Stack Developer experienced in Javascript,Typescript,ReactJS,NodeJs & NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-5xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
