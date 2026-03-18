import Link from "next/link"
import { BookOpen } from "lucide-react"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-brand-navy-light/20 bg-brand-navy backdrop-blur supports-[backdrop-filter]:bg-brand-navy/95">
            <div className="container flex h-16 items-center px-4 md:px-8 mx-auto">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-brand-gold" />
                    <span className="font-bold sm:inline-block text-white text-lg">
                        Hub Wiedzy Finansowej
                    </span>
                </Link>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/#modules"
                            className="transition-colors hover:text-brand-gold text-white/90"
                        >
                            Zagadnienia
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
