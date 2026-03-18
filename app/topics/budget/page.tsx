import { ArticleLayout } from "@/components/ArticleLayout";

export default function BudgetPage() {
    return (
        <ArticleLayout
            title="Budżet"
            description="Podstawowe zasady tworzenia budżetu domowego i państwowego."
        >
            <h2>Czym jest budżet?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <h2>Przychody i wydatki</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Identyfikacja źródeł dochodu.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Kontrola i planowanie wydatków.</li>
            </ul>
            
            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <p className="mb-0 text-lg font-medium text-brand-navy">
                    Złota zasada: Zawsze wydawaj mniej niż zarabiasz, a nadwyżkę lokuj w oszczędnościach.
                </p>
            </div>
            
            <h2>Podsumowanie</h2>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </ArticleLayout>
    );
}
