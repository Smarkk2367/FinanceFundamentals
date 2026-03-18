import { ArticleLayout } from "@/components/ArticleLayout";

export default function BankDepositPage() {
    return (
        <ArticleLayout
            title="Lokata bankowa"
            description="Podstawowe narzędzie do oszczędzania pieniędzy w banku."
        >
            <h2>Jak działa lokata?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <h2>Zasady działania</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Bezpieczeństwo zainwestowanego kapitału.</li>
                <li>Z góry określony zysk przy lokatach o stałym oprocentowaniu.</li>
                <li>Wpływ podatku od zysków kapitałowych (Podatek Belki).</li>
            </ul>
            
            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <p className="mb-0 text-lg font-medium text-brand-navy">
                    Większość lokat w UE jest gwarantowana przez fundusze gwarancyjne (w Polsce BFG) do kwot równowartości 100 000 EUR na wypadek upadku banku.
                </p>
            </div>
            
            <h2>Podsumowanie</h2>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </ArticleLayout>
    );
}
