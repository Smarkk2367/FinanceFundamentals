import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ArticleLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export function ArticleLayout({ title, description, children }: ArticleLayoutProps) {
    return (
        <article className="container px-4 md:px-6 py-10 md:py-16 mx-auto max-w-4xl">
            <Link
                href="/#modules"
                className="inline-flex items-center text-sm font-medium text-brand-gold hover:text-brand-gold-light transition-colors mb-8"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Powrót do modułów
            </Link>

            <header className="mb-12 border-b border-gray-200 pb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl md:text-5xl lg:text-5xl mb-4">
                    {title}
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed">
                    {description}
                </p>
            </header>

            <div className="prose prose-lg prose-headings:text-brand-navy prose-a:text-brand-gold hover:prose-a:text-brand-gold-light max-w-none text-gray-700">
                {children}
            </div>
        </article>
    );
}
