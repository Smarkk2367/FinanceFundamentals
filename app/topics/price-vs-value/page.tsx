import { ArticleLayout } from "@/components/ArticleLayout";

export default function PriceVsValuePage() {
    return (
        <ArticleLayout
            title="Cena a wartość"
            description="Różnica pomiędzy tym, ile płacisz, a tym co zyskujesz."
        >
            <h2>Koncepcja</h2>
            <p>
                Cena to to, co płacisz. Wartość to to, co dostajesz. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
            
            <h2>Dlaczego warto to rozróżniać?</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Unikanie pułapek konsumpcyjnych.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Mądre lokowanie środków na bazie analizy fundamentalnej.</li>
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
