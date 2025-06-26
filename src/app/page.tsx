import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reedy Engineering",
  description: "Innovative engineering solutions for a sustainable future",
};

  
  export default function Home() {
  return (
    <>
      <ScrollUp />

      <Hero />
      <Contact/>
    </>
  );
}
