import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
