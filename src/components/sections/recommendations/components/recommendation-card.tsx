interface RecommendationCardProps {
    text: string;
    name: string;
    description: string | { text: string; link: string; linkText: string };
}

export function RecommendationCard({ text, name, description }: RecommendationCardProps) {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xl font-bold">
                    {name.charAt(0)}
                </div>
                <div>
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                        {typeof description === "string" ? (
                            description
                        ) : (
                            <>
                                {description.text}
                                <a
                                    href={description.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    {description.linkText}
                                </a>
                            </>
                        )}
                    </p>
                    <p className="italic">&quot;{text}&quot;</p>
                </div>
            </div>
        </div>
    );
}