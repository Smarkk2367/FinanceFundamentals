import { ArticleLayout } from "@/components/ArticleLayout";

export default function ForeignReservesPage() {
    return (
        <ArticleLayout
            title="Rezerwy dewizowe"
            description="Czym są rezerwy dewizowe i do czego służą państwu?"
        >
            <h2>Wprowadzenie</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nunc sed velit dignissim sodales ut eu.
            </p>
            
            <h2>Znaczenie dla gospodarki</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Zapewnienie wiarygodności finansowej państwa.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Interwencje na rynku walutowym w celu stabilizacji kursu.</li>
            </ul>
            
            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <p className="mb-0 text-lg font-medium text-brand-navy">
                    Ważna uwaga: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            
            <h2>Podsumowanie</h2>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </ArticleLayout>
    );
}
