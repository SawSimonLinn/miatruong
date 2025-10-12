import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-5rem)] min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 animate-twinkling-stars"></div>
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6 z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center rounded-full border-2 border-primary/50 bg-primary/10 px-4 py-1 text-sm font-medium text-primary shadow-glow">
            <span className="relative mr-2 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/75 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
            </span>
            Open to opportunities
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Full-Stack Software Engineer <br /> with a Creative Eye for Design
          </h1>
          <p className="mx-auto max-w-[900px] text-lg text-muted-foreground md:text-xl text-balance">
            I build scalable, user-focused web applications with React,
            TypeScript, and Node.js — combining logic and creativity to deliver
            intuitive, modern experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="shadow-glow">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="/Mia_Truong_Resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary" />
        </Link>
      </div>
    </section>
  );
}
