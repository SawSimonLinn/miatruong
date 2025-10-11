import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects featured={true} />
        <TechStack />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
