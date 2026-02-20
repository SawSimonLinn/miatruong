import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educations = [
    {
        institution: "San Diego City College",
        degree: "Associate Degree in Computer Science",
        year: "2026 – 2027"
    },
    {
        institution: "TripleTen",
        degree: "Software Engineering Certificate",
        year: "2025"
    },
    {
        institution: "Glen Dow Academy",
        degree: "Esthetician Certificate",
        year: "2020"
    },
    {
        institution: "Eastern Washington University",
        degree: "Pre-Pharmacy",
        year: "2015"
    }
];

export function Education() {
    return (
        <section id="education" className="w-full bg-background/50 py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Education</h2>
                </div>
                <div className="mx-auto mt-12 grid max-w-3xl gap-8">
                    {educations.map((edu) => (
                        <Card key={edu.institution} className="flex items-center p-6">
                            <GraduationCap className="h-10 w-10 text-primary mr-6" />
                            <div className="flex-grow">
                                <div className="flex items-baseline justify-between">
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                                </div>
                                <p className="text-muted-foreground">{edu.institution}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
