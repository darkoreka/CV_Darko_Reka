import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                        src="https://res.cloudinary.com/kineto-app/image/upload/v1744104612/logo_xindir.png"
                        alt="DRK Logo"
                        width={40}
                        height={40}
                        className="rounded-md"
                    />
                    <span className="text-xl font-bold tracking-tight">Darko Reka Katalin</span>
                </div>

                <nav className="hidden md:flex gap-6">
                    <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
                        Projects
                    </Link>
                    <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
                        Skills
                    </Link>
                    <Link href="#certifications" className="text-sm font-medium transition-colors hover:text-primary">
                        Certifications
                    </Link>
                    <Link href="#recommendations" className="text-sm font-medium transition-colors hover:text-primary">
                        Recommendations
                    </Link>
                    <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                        Contact
                    </Link>
                </nav>

                <Button variant="outline" size="sm" className="hidden md:flex">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                </Button>

                <Button variant="ghost" size="sm" className="md:hidden">
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </Button>
            </div>
        </header>
    )
}