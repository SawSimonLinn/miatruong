import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
