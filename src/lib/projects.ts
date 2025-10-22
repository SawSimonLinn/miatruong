export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    githubUrl: string;
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        id: "momentum-internship",
        title: "Momentum Internship Program Website",
        description: "Designed and deployed a full website for intern recruitment & partnerships. Built a secure email system with Nodemailer + OAuth 2.0.",
        tech: ["React", "TypeScript", "TailwindCSS", "AWS"],
        image: "/projects/mip.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/MIP-site",
        liveUrl: "https://momentuminternshipprogram.com/",
    },
    {
        id: "wtwr-app",
        title: "WTWR (What To Wear)",
        description: "MERN stack project. Implemented authentication, CRUD API, and weather API integration. Deployed via Google Cloud with PM2 + Nginx.",
        tech: ["MERN", "Google Cloud", "PM2", "Nginx"],
        image: "/projects/w2w.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/se_project_react",
        liveUrl: "https://w2w.crabdance.com/",
    },
        {
        id: "drops-health-tracker",
        title: "DROPS Health Tracker App",
        description: "Created reusable UI components with Storybook and Headless UI. Integrated a GraphQL backend & health data visualization.",
        tech: ["React", "GraphQL", "Vite", "Storybook"],
        image: "/projects/drops.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/drops", 
    },
    {
        id: "code-jam-cocktail-chronicles",
        title: "Cocktail Chronicles Project",
        description: "Won 1st place on both fan's favorite and judges award during a 5-day Hackathon styled coding competition; delivered responsive UI, dark/light mode, and CSS animations.",
        tech: ["HTML", "CSS"],
        image: "/projects/cocktail-chronicles.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/Cocktail_Chronicles",
        liveUrl: "https://bjthe4.github.io/Cocktail_Chronicles/",
    },
    {
        id: "code-jam-be-cool-about-wildfires",
        title: "Be Cool About Wildfires Project",
        description: "Won 1st place for Be Cool About Wildfires hackathon-styled coding competition. ",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/projects/be-cool-about-wildfires.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/BeCoolAboutWildfires",
        liveUrl: "https://droman7.github.io/BeCoolAboutWildfires/",
    },
];
