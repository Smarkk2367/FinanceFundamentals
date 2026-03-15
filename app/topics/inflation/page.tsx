import { ArticleLayout } from "@/components/ArticleLayout";
import { InflationCalculator } from "@/components/InflationCalculator";

export default function InflationPage() {
    return (
        <ArticleLayout
            title="Inflacja i jej skutki"
            description="Czym jest inflacja i jak wpływa na Twoje oszczędności i gospodarkę."
        >
            <h2>Czym jest inflacja?</h2>
            <p>
                Inflacja to proces wzrostu ogólnego poziomu cen w gospodarce w czasie. Oznacza to, że z biegiem lat
                za tę samą kwotę pieniędzy można kupić coraz mniej produktów i usług.
                Innymi słowy, inflacja powoduje <strong>spadek siły nabywczej pieniądza</strong>.
            </p>

            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <p className="mb-0 text-lg font-medium text-brand-navy">
                    Przykładowo: jeśli roczna inflacja wynosi 5%, to koszyk produktów,
                    który w tym roku kosztuje 100 zł, w następnym roku może kosztować około 105 zł.
                </p>
            </div>

            <h2>Jak mierzymy inflację?</h2>
            <p>
                Najczęściej inflację mierzy się za pomocą <strong>indeksu cen konsumpcyjnych (CPI)</strong>.
                Wskaźnik ten pokazuje, jak zmieniają się ceny wybranego koszyka dóbr i usług kupowanych przez przeciętne gospodarstwo domowe.
            </p>

            <h3>Koszyk ten obejmować może m.in.:</h3>
            <ul className="list-disc pl-6 space-y-2">
                <li>żywność i napoje</li>
                <li>mieszkanie i energię</li>
                <li>transport</li>
                <li>odzież</li>
                <li>usługi (chociażby edukacja czy opieka zdrowotna)</li>
            </ul>

            <hr className="my-8 border-gray-200" />

            <h2>Przyczyny inflacji</h2>
            <p>Źródła inflacji różnią się w zależności od jej typu:</p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-navy mb-3">Inflacja popytowa</h4>
                    <p className="text-sm text-gray-600">Występuje, gdy popyt na dobra i usługi przewyższa podaż. Prowadzi to do wzrostu cen, ponieważ konsumenci są skłonni zapłacić więcej za ograniczone zasoby.</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-navy mb-3">Inflacja kosztowa</h4>
                    <p className="text-sm text-gray-600">Pojawia się gdy rosną koszty produkcji dóbr i usług. Firmy przerzucają te koszty na konsumentów w postaci wyższych cen.</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-navy mb-3">Inflacja monetarna</h4>
                    <p className="text-sm text-gray-600">Obserwowalna jest gdy w gospodarce pojawia się zbyt dużo pieniędzy w stosunku do ilości dóbr i usług. W efekcie wartość pieniądza spada, a ceny rosną.</p>
                </div>
            </div>

            <h2>Skutki inflacji</h2>
            <p>Inflacja wpływa na wiele obszarów życia gospodarczego:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>spadek siły nabywczej pieniądza</li>
                <li>większa niepewność gospodarcza</li>
                <li>trudniejsze planowanie wydatków i inwestycji</li>
                <li>może wspierać wzrost gospodarczy (przy niskiej inflacji)</li>
                <li>zachęca do inwestowania, zamiast gromadzenia gotówki</li>
            </ul>

            <InflationCalculator />

            <div className="bg-brand-navy text-white p-8 rounded-xl my-10 border border-brand-navy-light shadow-lg not-prose">
                <h3 className="text-2xl font-bold text-brand-gold mb-4 mt-0">Podsumowanie</h3>
                <p className="text-white/90 leading-relaxed max-w-2xl">
                    Inflacja jest naturalnym zjawiskiem w gospodarce rynkowej.
                    Kluczowe jest jednak jej tempo. Zbyt wysoka inflacja może destabilizować gospodarkę,
                    natomiast umiarkowana i kontrolowana jest uznawana za element zdrowego rozwoju ekonomicznego.
                </p>
            </div>
        </ArticleLayout>
    );
}
