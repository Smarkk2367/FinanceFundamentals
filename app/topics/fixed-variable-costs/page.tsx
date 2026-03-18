import { ArticleLayout } from "@/components/ArticleLayout";

export default function FixedVariableCostsPage() {
    return (
        <ArticleLayout
            title="Koszt stały i zmienny"
            description="Zrozum różnice w rodzajach kosztów w życiu i biznesie."
        >
            <h2>Podział kosztów</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <h2>Charakterystyka</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Koszty stałe:</strong> Należą do nich np. czynsz, raty kredytu – ponosisz je niezależnie od sytuacji.</li>
                <li><strong>Koszty zmienne:</strong> Lorem ipsum dolor sit amet.</li>
                <li>Sposoby na optymalizację kosztów.</li>
            </ul>
            
            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <p className="mb-0 text-lg font-medium text-brand-navy">
                    Ważna uwaga: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
            </div>
            
            <h2>Podsumowanie</h2>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </ArticleLayout>
    );
}
