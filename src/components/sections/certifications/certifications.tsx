export function Certifications() {
    return (
        <section id="certifications" className="py-16 flex justify-center items-center">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Certifications</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {[
                        {
                            title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
                            issuer: "Udemy",
                            date: "2024",
                            link: "https://www.udemy.com/certificate/UC-b31d708d-a605-4079-ae45-5ffd05d92157/",
                            description: "Core, Annotations, Java Config, Spring REST, Spring MVC, AOP, Hibernate/JPA and Maven"
                        },
                        {
                            title: "Full Stack: React and Java Spring Boot - The Developer Guide",
                            issuer: "Udemy",
                            date: "2024",
                            link: "https://www.udemy.com/certificate/UC-349170c2-f889-4efd-8bfe-2ff2fffb1355/",
                            description: "Develop a Full Stack web application with React front-end and Spring Boot back-end, develop a Spring Boot back-end using REST APIs and MySQL database, apply security with JWT, OAuth2, OIDC and HTTPS/SSL/TLS"
                        },
                    ].map((cert, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border">
                            <h3 className="font-bold">{cert.title}</h3>
                            <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline block mt-2"
                                >
                                    {cert.link}
                                </a>
                            )}
                            {cert.description && <p className="mt-2">{cert.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}