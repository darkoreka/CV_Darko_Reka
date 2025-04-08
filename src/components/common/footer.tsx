import Image from "next/image"
import Link from "next/link"

export function Footer() {
    const logo = "https://res.cloudinary.com/kineto-app/image/upload/v1744104612/logo_xindir.png"
    return (
        <footer className="border-t py-6 md:py-8">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="DRK Logo"
                        width={30}
                        height={30}
                        className="rounded-md"
                    />
                    <span className="font-medium">Darko Reka Katalin</span>
                </div>

                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Darko Reka Katalin. All rights reserved.
                </div>

                <div className="flex gap-4">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Privacy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    )
}