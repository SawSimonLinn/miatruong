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
        id: "tts-glow-bar",
        title: "TT's Glow Bar",
        description: "Responsive Next.js site for an esthetician to promote services and portfolio, featuring SEO-focused metadata, a promotional banner, popup, theme toggle, mobile nav, optimized images, portfolio style filters, Google Maps, Square booking routing, and a secure Resend contact form with reCAPTCHA to boost visibility and bookings.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui", "Google Maps", "Resend", "reCAPTCHA", "Vercel", "Git", "GitHub"],
        image: "/projects/ttsglowbar.png",
        githubUrl: "https://github.com/trangmtruong/ttsglowbar",
        liveUrl: "https://ttsglowbar.com",
    },
    {
        id: "momentum-internship",
        title: "Momentum Internship Program",
        description: "A responsive site for companies, interns, and university partners to explore the program, with a secure Nodemailer + OAuth 2.0 contact form, WordPress-sourced blog, testimonial carousels, and AWS hosting. The front end runs on Vite/React/TypeScript/Tailwind, while a Node/Express API serves content, integrates with WordPress and email, and is deployed across S3/CloudFront with an EC2 + PM2 backend.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "WordPress (Lightsail)", "Gmail API Google OAuth2.0", "AWS S3", "AWS CloudFront", "AWS EC2", "PM2", "npm", "ClickUp", "Discord", "Git", "GitHub"],
        image: "/projects/mip.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/MIP-site",
        liveUrl: "https://momentuminternshipprogram.com/",
    },
    {
        id: "wtwr-app",
        title: "WTWR (What To Wear)",
        description: "A full-stack React/Vite app that pulls live weather from OpenWeather, filters a community wardrobe by today’s conditions, and lets users sign up, log in, add their own garments with photos/weather tags, like/unlike/delete items, and manage their profile via JWT-protected routes backed by an Express/MongoDB API and deployed on Google Cloud.",
        tech: ["React", "Vite", "React Router", "CSS", "OpenWeather API", "ESLint", "Prettier", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "celebrate (Joi)", "validator.js", "helmet", "cors", "winston", "Postman", "Jest", "nodemon", "pm2", "nginx", "Certbot", "Google Cloud", "Figma", "VS Code", "Git", "GitHub"],
        image: "/projects/w2w.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/se_project_react",
        liveUrl: "https://w2w.crabdance.com/",
    },
    {
        id: "drops-health-tracker",
        title: "DROPS Care",
        description: "A full-stack TypeScript/React + Keystone app for diabetes care: patients onboard, create accounts, configure medication reminders and glucose alerts, log diet/activity, and view dashboards/notifications via protected React/Apollo GraphQL routes, while the Keystone backend (Prisma/MySQL) enforces auth/sessions and per-user access control, stores health data models, and handles S3 file uploads, all styled with Tailwind/Headless UI and built with Storybook/Vitest plus linting and precommit hooks.",
        tech: ["React", "TypeScript", "Vite", "Apollo Client", "GraphQL", "React Router", "Tailwind CSS", "Headless UI", "Storybook", "Vitest", "ESLint", "Prettier", "Husky", "lint-staged", "Node.js", "Keystone 6 Core", "Keystone 6 Auth", "Prisma", "MySQL", "AWS S3", "dotenv", "Jest", "Git", "GitHub", "Figma", "Jira"],
        image: "/projects/drops.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/drops", 
    },
    {
        id: "code-jam-be-cool-about-wildfires",
        title: "Be Cool About Wildfires",
        description: "A responsive web page that won 1st place in a hackathon-style coding competition; collaborated with four teammates to build a community relief experience that connects wildfire victims with local volunteers and donors via simple sign-up forms, responsive layouts, and interactive modals. Built in five days, it delivers a clear mission statement, dynamic visuals (looping fire hero, layered color gradient), and form-driven workflow to make the community its own resource, leveraging lightweight front-end tooling and GitHub collaboration for rapid delivery.",
        tech: ["HTML", "CSS", "JavaScript", "GitHub", "Canva"],
        image: "/projects/be-cool-about-wildfires.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/BeCoolAboutWildfires",
        liveUrl: "https://droman7.github.io/BeCoolAboutWildfires/",
    },
    {
        id: "code-jam-cocktail-chronicles",
        title: "Cocktail Chronicles",
        description: "A responsive web page that won first place in both Judges’ Choice and Fans’ Favorite against five other teams, emerging from a first-time team project. It showcases cocktail recipes with smooth animations and transitions, blends light and dark themes, and includes a quick back-to-top interaction in an accessible, cohesive system, showing how a four-person crew shipped a polished multi-device experience in just five hackathon days using only semantic HTML and CSS (BEM) without any JavaScript frameworks.",
        tech: ["HTML5", "CSS3", "BEM", "Flexbox"],
        image: "/projects/cocktail-chronicles.png", // Add your own image here
        githubUrl: "https://github.com/trangmtruong/Cocktail_Chronicles",
        liveUrl: "https://bjthe4.github.io/Cocktail_Chronicles/",
    },
];
