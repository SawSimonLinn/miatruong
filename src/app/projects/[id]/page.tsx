import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft />
                Back to Projects
              </Link>
            </div>
            <Card>
                <CardHeader>
                    <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        width={1200}
                        height={675}
                        className="w-full rounded-t-lg aspect-video object-cover"
                    />
                </CardHeader>
                <CardContent className="p-6 md:p-8 space-y-6">
                    <CardTitle className="text-4xl text-primary">{project.title}</CardTitle>
                    <CardDescription className="text-xl">
                        {project.description}
                    </CardDescription>

                    <div className="space-y-2">
                        <h3 className="font-headline text-2xl font-bold text-primary">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <Badge key={t} variant="secondary">{t}</Badge>
                        ))}
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
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
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
