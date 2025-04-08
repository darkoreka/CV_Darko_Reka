import { ProjectCard } from "./components/project-card";

export function Projects() {
    const projects = [
        {
            image: "https://res.cloudinary.com/kineto-app/image/upload/v1744104611/tengrai_l6nwja.svg",
            title: "Tengrai.com",
            role: "Frontend Developer at Tengr.ai",
            description: "Contributed to UI development and feature implementation.",
            link: "https://tengr.ai/en",
        },
        {
            image: "https://res.cloudinary.com/kineto-app/image/upload/v1744104612/codespring-logo-social-media-02_idpba9.jpg",
            title: "SConES - Student Conference Management System",
            role: "Diploma Thesis Project - Internship at Codespring",
            description:
                "A comprehensive web application for managing Transylvanian student conferences. Features include student registration, essay submissions, teacher approvals, and conference management. Built with a three-tier architecture: central server, web application, and database. The backend was developed using Spring Boot, and the frontend was built with React. The design was created in Figma, and the database used was MySQL, with MinIO for document storage.",
        },
        {
            image: "https://res.cloudinary.com/kineto-app/image/upload/v1742993739/st9o2zsgkuombqgkggum.png",
            title: "Kineto-App",
            role: "Personal project - Mobile application for at home kinetotherapy sessions",
            description:
                "A platform designed to help patients with at-home kinetotherapy sessions. The app provides personalized exercise plans, video demonstrations, and progress tracking. It aims to enhance the rehabilitation experience by offering a user-friendly interface and easy access to necessary resources.",
            demo: "https://res.cloudinary.com/kineto-app/video/upload/v1744115162/demo_kineto_app_hkxyk8.mp4",
        },
    ];
    return (
        <section id="projects" className="py-16 p-4 bg-slate-50 dark:bg-slate-900 flex justify-center items-center">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            role={project.role}
                            description={project.description}
                            link={project.link}
                            demo={project.demo}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}