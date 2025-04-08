export function Recommendations() {
    return (

        <section id="recommendations" className="flex justify-center items-center py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Recommendations</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            text: "I am writing to enthusiastically recommend Darkó Réka for a front-end developer position. As the founder of Tengr.ai, I have had the pleasure of watching Réka grow from a junior developer into a highly capable professional over our time working together. During her tenure, Réka has demonstrated exceptional aptitude in Next.js development and front-end technologies. She has consistently shown remarkable dedication to expanding her technical expertise, taking initiative to learn new skills and staying current with modern web development practices. Her solutions to complex challenges have been thorough and have enhanced our team's overall performance.",
                            name: "Szabó W. Péter",
                            description: {
                                text: "Founder of ",
                                link: "https://tengr.ai",
                                linkText: "Tengr.ai",
                            },
                        },
                        {
                            text: "It is my pleasure to recommend Reka, an outstanding student with whom I had the privilege of working in various capacities, including as her professor, group project mentor, and license thesis coordinator. Réka demonstrated dedication, technical expertise and collaborative skills during our work on a web-based conference management project. She consistently exhibited strong technical and communication qualities, fostering a productive and creative team environment. I am confident that her talent and work ethic will enable her to excel in future professional endeavors.",
                            name: "Dr. Sulyok Csaba",
                            description: "Babeș Bolyai University Lecturer",
                        },
                    ].map((rec, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xl font-bold">
                                    {rec.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold">{rec.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {typeof rec.description === "string" ? (
                                            rec.description
                                        ) : (
                                            <>
                                                {rec.description.text}
                                                <a
                                                    href={rec.description.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:underline"
                                                >
                                                    {rec.description.linkText}
                                                </a>
                                            </>
                                        )}
                                    </p>
                                    <p className="italic">"{rec.text}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}