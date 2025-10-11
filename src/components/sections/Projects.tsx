import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Projects({ featured = false }: { featured?: boolean }) {
    const projectsToShow = featured ? projects.slice(0, 2) : projects;

    return (
        <section id="projects" className="w-full bg-background/50 py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
                        {featured ? "Featured Projects" : "All Projects"}
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
                        Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-6xl gap-8 grid-cols-1 md:grid-cols-2">
                    {projectsToShow.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
                {featured && (
                    <div className="mt-12 text-center">
                        <Button asChild size="lg">
                            <Link href="/projects">View All Projects</Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
