"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
    image: string;
    title: string;
    role: string;
    description: string;
    link?: string;
    demo?: string;
}

export function ProjectCard({ image, title, role, description, link, demo }: ProjectCardProps) {
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoEnd = () => {
        setShowVideo(false); 
    };
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md p-4">
            {showVideo && demo ? (
                <video
                    src={demo}
                    controls
                    autoPlay
                    className="w-full h-auto"
                    onEnded={handleVideoEnd}
                />
            ) : (
                <>
                    <Image src={image} alt={title} className="w-full h-auto mb-4" width={400} height={300} />
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p className="text-muted-foreground mb-2">{role}</p>
                    <p className="text-muted-foreground mb-4">{description}</p>
                    {link && (
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            Visit Project →
                        </Link>
                    )}
                    {demo && (
                        <button
                            onClick={() => setShowVideo(true)} 
                            className="text-primary hover:underline mt-2"
                        >
                            Show Demo →
                        </button>
                    )}
                </>
            )}
        </div>
    );
}