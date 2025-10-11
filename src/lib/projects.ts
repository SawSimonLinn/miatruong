import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';

export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: ImagePlaceholder;
    githubUrl: string;
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        id: "momentum-internship",
        title: "Momentum Internship Program Website",
        description: "Designed and deployed a full website for intern recruitment & partnerships. Built a secure email system with Nodemailer + OAuth 2.0.",
        tech: ["React", "TypeScript", "TailwindCSS", "AWS"],
        image: PlaceHolderImages.find(p => p.id === "project-momentum")!,
        githubUrl: "https://github.com/trangmtruong",
        liveUrl: "#",
    },
    {
        id: "drops-health-tracker",
        title: "DROPS Health Tracker App",
        description: "Created reusable UI components with Storybook and Headless UI. Integrated a GraphQL backend & health data visualization.",
        tech: ["React", "GraphQL", "Vite", "Storybook"],
        image: PlaceHolderImages.find(p => p.id === "project-drops")!,
        githubUrl: "https://github.com/trangmtruong",
        liveUrl: "#",
    },
    {
        id: "wtwr-app",
        title: "WTWR (What To Wear)",
        description: "MERN stack project. Implemented authentication, CRUD API, and weather API integration. Deployed via Google Cloud with PM2 + Nginx.",
        tech: ["MERN", "Google Cloud", "PM2", "Nginx"],
        image: PlaceHolderImages.find(p => p.id === "project-wtwr")!,
        githubUrl: "https://github.com/trangmtruong",
    },
    {
        id: "code-jam",
        title: "Code Jam Projects",
        description: "Won 1st place twice for 'Wildfires' & 'Cocktail Chronicles'; delivered responsive UI, dark/light mode, and CSS animations.",
        tech: ["HTML", "CSS", "JavaScript", "API"],
        image: PlaceHolderImages.find(p => p.id === "project-codejam")!,
        githubUrl: "https://github.com/trangmtruong",
    },
];
