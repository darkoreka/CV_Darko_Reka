import { recommendations } from "@/lib/data/recommendations-data";
import { RecommendationCard } from "./components/recommendation-card";

export function Recommendations() {
    return (
        <section id="recommendations" className="flex justify-center items-center py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Recommendations</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {recommendations.map((rec, index) => (
                        <RecommendationCard
                            key={index}
                            text={rec.text}
                            name={rec.name}
                            description={rec.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}