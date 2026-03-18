import { ArticleLayout } from "@/components/ArticleLayout";

export default function SimpleCompoundInterestPage() {
    return (
        <ArticleLayout
            title="Procent prosty i składany"
            description="Jak darmowe pieniądze robią kolejne darmowe pieniądze."
        >
            <h2>Wprowadzenie</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <h2>Czym się różnią?</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Procent prosty:</strong> Odsetki naliczane są tylko od kapitału początkowego.</li>
                <li><strong>Procent składany:</strong> Odsetki doliczane są do kapitału bazowego, dzięki czemu z czasem same również zarabiają odsetki (kapitalizacja).</li>
            </ul>
            
            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <p className="mb-0 text-lg font-medium text-brand-navy">
                    Magia procentu składanego wymaga jednego podstawowego składnika: czasu. Im wcześniej zaczniesz, tym szybciej kapitał rośnie eksponencjalnie.
                </p>
            </div>
            
            <h2>Podsumowanie</h2>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </ArticleLayout>
    );
}
