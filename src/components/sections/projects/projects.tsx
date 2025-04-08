import { projects } from "@/lib/data/projects-data";
import { ProjectCard } from "./components/project-card";

export function Projects() {

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