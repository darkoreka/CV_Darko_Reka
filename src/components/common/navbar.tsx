import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"
import { MobileNav } from "./mobile-nav"

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

                <a
                    href="/Darko_Reka_CV.pdf"
                    download
                    className="hidden md:flex"
                >
                    <Button
                        variant="outline"
                        size="sm"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                    </Button>
                </a>

                <MobileNav />
            </div>
        </header>
    )
}