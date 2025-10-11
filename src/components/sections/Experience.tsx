import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "PROJXON",
        role: "Web Developer Intern",
        period: "2025–Present",
        description: "Designed, coded, and deployed an AWS-hosted React app; collaborated with marketing and UX teams."
    },
    {
        company: "DROPS Externship",
        role: "Software Engineer Extern",
        period: "2025",
        description: "Built GraphQL components & UI for a health-tracking web app."
    },
    {
        company: "TT’s Glow Bar",
        role: "Owner / Developer",
        period: "2020–Present",
        description: "Built a booking website integrated with Google Calendar & Maps APIs."
    }
];

export function Experience() {
    return (
        <section id="experience" className="w-full py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Experience</h2>
                </div>
                <div className="relative mx-auto mt-12 max-w-3xl">
                    <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2"></div>
                    {experiences.map((exp, index) => (
                        <div key={exp.company} className="relative mb-8 flex items-start gap-6 md:justify-normal md:odd:flex-row-reverse md:odd:text-right">
                             <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <div className="w-full md:w-5/12">
                                <Card className="p-6">
                                    <div className="mb-2 flex flex-col md:odd:items-end">
                                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                                        <p className="mb-2 text-md font-semibold text-primary">{exp.company}</p>
                                    </div>
                                    <CardDescription className="text-balance">{exp.description}</CardDescription>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
