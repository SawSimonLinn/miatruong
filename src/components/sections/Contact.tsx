"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Clipboard } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";
import { useToast } from "@/hooks/use-toast";
import React from "react";

export function Contact() {
    const { toast } = useToast();
    const email = "trangmtruong@icloud.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        toast({
            title: "Email Copied!",
            description: "The email address has been copied to your clipboard.",
        });
    };

    return (
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-8 text-center">
                    <div className="space-y-4">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl text-balance">Let's build something amazing together.</h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl text-balance">
                            I'm currently open to new opportunities and collaborations. Feel free to reach out!
                        </p>
                    </div>
                    <Card className="p-8 w-full max-w-md">
                        <div className="flex flex-col items-center gap-6">
                             <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-3">
                                     <a href={`mailto:${email}`} className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors">
                                        <Mail className="h-6 w-6 text-primary" />
                                        <span>{email}</span>
                                    </a>
                                    <Button variant="ghost" size="icon" onClick={handleCopyEmail}>
                                        <Clipboard className="h-5 w-5" />
                                        <span className="sr-only">Copy Email</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <Link href="https://linkedin.com/in/trangmtruong" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition-colors justify-center">
                                    <Linkedin className="h-5 w-5 text-primary"/> 
                                    <span>linkedin.com/in/trangmtruong</span>
                                </Link>
                                <Link href="https://github.com/trangmtruong" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition-colors justify-center">
                                    <Github className="h-5 w-5 text-primary"/>
                                    <span>github.com/trangmtruong</span>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}