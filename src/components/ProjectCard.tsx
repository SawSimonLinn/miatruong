import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Globe, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
                <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    data-ai-hint={project.image.imageHint}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover"
                />
            </CardHeader>
            <CardContent className="p-6 space-y-4 flex-1">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 p-6 pt-0 items-stretch sm:items-center">
                 <ProjectDetailModal project={project}>
                    <Button variant="outline" className="w-full sm:w-auto">
                        View Details <ArrowRight />
                    </Button>
                </ProjectDetailModal>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link href={project.githubUrl} target="_blank">
                        <Github /> GitHub
                    </Link>
                </Button>
                {project.liveUrl && (
                    <Button asChild className="w-full sm:w-auto">
                        <Link href={project.liveUrl} target="_blank">
                            <Globe /> Live Demo
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
