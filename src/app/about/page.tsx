import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
}
