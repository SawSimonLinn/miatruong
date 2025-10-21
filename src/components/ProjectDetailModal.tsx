"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

export function ProjectDetailModal({ project, children }: { project: Project, children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader className="space-y-4 text-left">
          <DialogTitle className="text-3xl lg:text-4xl font-headline text-primary">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
            <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={1200}
                height={675}
                className="w-full rounded-lg aspect-video object-cover"
            />
            <DialogDescription className="text-base lg:text-lg">
                {project.description}
            </DialogDescription>
            
            <div className="space-y-4">
                <h3 className="font-headline text-2xl font-bold text-primary">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                ))}
                </div>
            </div>
        </div>
        <DialogFooter className="flex-row justify-start gap-2 border-t bg-card/60 -m-6 p-4 mt-6">
            <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank">
                    <Github /> GitHub
                </Link>
            </Button>
            {project.liveUrl && (
                <Button asChild>
                    <Link href={project.liveUrl} target="_blank">
                        <Globe /> Live Demo
                    </Link>
                </Button>
            )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
