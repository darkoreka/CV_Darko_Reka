interface SkillCategoryProps {
    title: string;
    skills: string[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
            <div className="space-y-2">
                {skills.map((skill) => (
                    <div key={skill} className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-center">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}