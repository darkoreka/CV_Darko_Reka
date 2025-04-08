import { SkillCategory } from "./components/skill-category";

export function Skills() {
    return (
        <section id="skills" className="py-16 flex justify-center items-center">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <SkillCategory title="Frontend" skills={["Next.js", "React", "TypeScript", "Tailwind", "Shadcn", "MUI"]} />
                    <SkillCategory title="Backend" skills={["Java Spring Boot", "Node.js", "RESTful APIs"]} />
                    <SkillCategory title="Databases" skills={["Firebase", "MySQL", "MSSQL", "MongoDB"]} />
                    <SkillCategory title="DevOps & Tools" skills={["Git", "Docker"]} />
                    <SkillCategory title="Mobile" skills={["Flutter", "Dart"]} />
                </div>
            </div>
        </section>
    )
}