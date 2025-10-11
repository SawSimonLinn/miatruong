import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const techCategories = {
  "Frontend": ["React", "TypeScript", "Tailwind CSS", "Vite", "Storybook", "Headless UI"],
  "Backend": ["Node.js", "Express", "GraphQL", "REST APIs", "Keystone JS"],
  "Database": ["MongoDB", "MySQL", "NoSQL"],
  "Cloud / DevOps": ["AWS (S3, EC2, Route53)", "Nginx", "PM2", "Linux"],
  "Tools": ["Git", "GitHub", "Postman", "Jira", "Figma", "ClickUp"]
};

export function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">My Tech Stack</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
                A selection of technologies and tools I use to bring ideas to life.
            </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8">
          {Object.entries(techCategories).map(([category, techs]) => (
            <Card key={category} className="p-6">
              <h3 className="font-headline text-xl font-bold text-primary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-primary/50 text-base">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
