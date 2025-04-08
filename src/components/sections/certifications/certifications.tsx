import { certifications } from "@/lib/data/certidicationsData";
import { CertificationCard } from "./components/certification-card";


export function Certifications() {
    return (
        <section id="certifications" className="py-16 flex justify-center items-center">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Certifications</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {certifications.map((cert, index) => (
                        <CertificationCard
                            key={index}
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            link={cert.link}
                            description={cert.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}