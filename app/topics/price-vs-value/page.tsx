import { ArticleLayout } from "@/components/ArticleLayout";
import { CostPerUseSimulator } from "@/components/CostPerUseSimulator";

export default function PriceVsValuePage() {
    return (
        <ArticleLayout
            title="Cena a Wartość"
            description="Zrozumienie, dlaczego giganci rynkowi nie patrzą na kwotę przy kasie. Cena to co płacisz. Wartość to co z tego masz."
        >
            <h2>Iluzja sklepowej metki</h2>
            <p className="mb-8">
                Jeden z najwybitniejszych inwestorów dzisiejszych czasów, Warren Buffett, zamknął kiedyś sekret zarabiania pieniędzy w zaledwie jednym zdaniu: <strong>"Cena jest tym co płacisz. Wartość jest tym, co ze sobą stamtąd wynosisz".</strong> Brak świadomości tej złotej różnicy to powód, dla którego klasa średnia zadłuża się na potęgę w błyskotki.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                <div className="bg-white border-2 border-red-200 rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-red-800 border-b-2 border-red-100 pb-4 mb-4 flex items-center gap-3">
                        <span className="bg-red-50 p-2 rounded-lg text-2xl">🏷️</span> Sklepowa Cena
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        To sucha, pusta arbitralna liczba na metce produktu. W dzisiejszych czasach nie wynika ona absolutnie z kosztów materiałów czy sensownej technologii nakładu produkcyjnego.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Cena jest dyktowana przez siłę marketingu, logotyp znanej marki na boku oraz taktyczne stworzenie rynkowego "niedoboru" (np. luksusowe obuwie). Cena bazuje na ułudzie prestiżu.
                    </p>
                </div>

                <div className="bg-white border-2 border-brand-gold/40 rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-gold border-b-2 border-brand-gold/20 pb-4 mb-4 flex items-center gap-3">
                        <span className="bg-brand-gold/10 p-2 rounded-lg text-2xl">💎</span> Prawdziwa Wartość
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        To fizyczne, konkretne korzyści i użyteczność ścięta u podstawy, którą wyciągniesz z tego przedmiotu, kiedy już przyniesiesz go do domu na swój własny prywatny dywan. Wartość mierzy to w jakim stopniu dany obiekt ulepszy Twoje życie codzienne i jak długo z Tobą przetrwa rozrysowując pożytek.
                    </p>
                </div>
            </div>

            <h2>Paradoks butelki ze stacji</h2>
            <p>
                Mała, przeciętna butelka czystej, nienagazowanej wody w standardowym osiedlowym markecie po sąsiedzku kosztuje (CENA) w okolicach <strong>3 PLN</strong>. Jej wartość jest spora, bo jest bardzo dobrym dopełnieniem nawodnienia przy spacerze.
            </p>
            <p>
                Jeżeli postawilibyśmy się jednak w centrum ogromnej afrykańskiej pustyni pod palącym słońcem w sytuacji wielkiego zagubienia po zgubieniu mapy – ile byłbyś w stanie zapłacić za tę samą wodę w takiej samej butelce? Cena to w końcu te same 3 zł. Ale jej <strong>WARTOŚĆ UŻYTKOWA</strong> staje się absolutnie nieskończona (ochrona organów i życia przed dramatyczną zapaścią). Na tym opiera się wolny handel.
            </p>

            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold flex gap-4">
                <span className="text-3xl leading-none">🧠</span>
                <p className="mb-0 text-brand-navy leading-relaxed font-medium">
                    Nie oceniaj swoich inwestycji w ubrania czy elektronikę na podstawie paragonów w sklepie – licz je na podstawie wzoru na <strong>Cenę za Jedno Użycie (Cost-Per-Use)</strong>. Kupno butów za niebotyczne 1000 zł, które nosisz i nie niszczysz systematycznie przez okrągłe 4 lata to gigantycznie tańsza transakcja i budowanie wartości niż kupno tandety za rzekomo oszczędnościowe tanie 150 zł... które rozlecą się od błota i wilgoci wyrzucone po upływie półtora zaledwie miesiąca.
                </p>
            </div>

            <CostPerUseSimulator />

        </ArticleLayout>
    );
}
