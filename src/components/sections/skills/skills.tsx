import { skills } from "@/lib/data/skills-data";
import { SkillCategory } from "./components/skill-category";

export function Skills() {
    return (
        <section id="skills" className="py-16 flex justify-center items-center">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {skills.map((category, index) => (
                        <SkillCategory key={index} title={category.title} skills={category.skills} />
                    ))}
                </div>
            </div>
        </section>
    )
}