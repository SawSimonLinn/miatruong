import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/20 bg-card/60 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mia Truong. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/trangmtruong" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/trangmtruong" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
