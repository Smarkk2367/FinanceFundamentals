import { ArticleLayout } from "@/components/ArticleLayout";

export default function DeferredPaymentPage() {
    return (
        <ArticleLayout
            title="Płatność odroczona"
            description="Kup teraz, zapłać później – plusy i haczyki mechanizmu BNPL."
        >
            <h2>Czym jest BNPL?</h2>
            <p>
                Z angielskiego "Buy Now, Pay Later" (np. PayPo, Twisto). 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
            
            <h2>Na co uważać?</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Ułuda darmowych pieniędzy – to wciąż pożyczka.</li>
                <li>Kary umowne i wysokie procenty po przekroczeniu bezpłatnego terminu spłaty (często 30 dni).</li>
                <li>Pokusa kupowania rzeczy, na które nas obiektywnie nie stać.</li>
            </ul>
            
            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <p className="mb-0 text-lg font-medium text-brand-navy">
                    Ważna uwaga: Nieterminowa spłata płatności odroczonych jest notowana w BIK i może uniemożliwić wzięcie kredytu hipotecznego.
                </p>
            </div>
            
            <h2>Podsumowanie</h2>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </ArticleLayout>
    );
}
