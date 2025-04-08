import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { PhotoCarousel } from "./photo-carousel"
import Link from "next/link"

export function Header() {
    return (
        <section className="relative p-4">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-600 to-slate-800 -z-10" />
            <div className="container py-16 md:py-24">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="order-2 md:order-1">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                Hi! I&apos;m a Fullstack Developer
                            </h1>
                            <p className="text-muted-foreground max-w-[600px] text-white/80">
                                Passionate about building engaging and user-friendly web applications.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="#contact">
                                    <Button>
                                        Contact Me
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="#projects">
                                    <Button variant="secondary">
                                        View Projects
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="w-full max-w-[350px] aspect-square relative rounded-xl overflow-hidden">
                            <PhotoCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}