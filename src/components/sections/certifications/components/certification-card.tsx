interface CertificationCardProps {
    title: string;
    issuer: string;
    date: string;
    link?: string;
    description?: string;
}

export function CertificationCard({ title, issuer, date, link, description }: CertificationCardProps) {
    return (
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border">
            <h3 className="font-bold">{title}</h3>
            <p className="text-muted-foreground">{issuer} • {date}</p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline block mt-2"
                >
                    {link}
                </a>
            )}
            {description && <p className="mt-2">{description}</p>}
        </div>
    );
}