import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const softSkills = ["Collaboration", "Communication", "Problem Solving", "Growth Mindset", "Creativity"];
const hardSkills = ["React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "AWS", "Git"];

export function About() {
  const avatar = PlaceHolderImages.find((img) => img.id === "profile-avatar");
  return (
    <section id="about" className="w-full bg-background/50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
              I’m Mia Truong, a Full-Stack Developer experienced in React, TypeScript, Node.js, and REST APIs. My background in business ownership and hospitality refined my attention to detail, communication, and creativity — now powering my software engineering work. Fluent in English and Vietnamese, I value teamwork, learning, and building polished products that make life simpler.
            </p>
          </div>
          <div className="flex justify-center">
              {avatar && (
              <Image
                  src={avatar.imageUrl}
                  alt={avatar.description}
                  data-ai-hint={avatar.imageHint}
                  width={250}
                  height={250}
                  className="h-64 w-64 rounded-full border-4 border-primary object-cover shadow-glow"
                  priority
              />
              )}
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col items-center space-y-4">
                <h3 className="font-headline text-2xl font-bold tracking-tighter text-primary">Hard Skills</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {hardSkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <h3 className="font-headline text-2xl font-bold tracking-tighter text-primary">Soft Skills</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {softSkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
