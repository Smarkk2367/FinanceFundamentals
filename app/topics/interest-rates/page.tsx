import { ArticleLayout } from "@/components/ArticleLayout";

export default function InterestRatesPage() {
    return (
        <ArticleLayout
            title="Stopy Procentowe"
            description="Czym są i kto je ustala?"
        >
            <h2>Czym są Stopy Procentowe?</h2>
            <p>
                Stopy procentowe określają koszt pożyczenia pieniędzy lub zysk z oszczędzania.
            </p>
            <p>
                Wyrażane są w procentach w skali roku i pokazują,
                ile trzeba zapłacić za korzystanie z kapitału lub ile można zarobić, gdy udostępnia się swoje środki innym.
            </p>

            <div className="bg-brand-navy-light text-white p-6 rounded-xl my-8">
                <h3 className="text-brand-gold mt-0 border-b border-brand-gold/30 pb-2">Przykładowo</h3>
                <p className="mb-0">
                    jeśli stopa procentowa wynosi 5% rocznie, oznacza to, że pożyczając 1000 zł na rok, należy oddać około 1050 zł.
                </p>
            </div>

            <p>
                W praktyce stopy procentowe wpływają na wiele elementów codziennego życia finansowego,
                takich jak kredyty hipoteczne, oprocentowanie lokat czy koszt finansowania dla firm.
            </p>

            <h2>Kto ustala stopy procentowe?</h2>
            <p>
                Główną instytucją odpowiedzialną za ustalanie stóp procentowych w Polsce jest <strong>Narodowy Bank Polski (NBP)</strong>.
            </p>

            <p>
                Decyzje o zmianie stóp procentowych podejmowane są przez <strong>Radę Polityki Pieniężnej (RPP)</strong>,
                która zbiera się regularnie, aby analizować sytuację gospodarczą i podejmować decyzje mające na celu utrzymanie stabilności cen.
            </p>

            <h2>
                Dlaczego stopy procentowe się zmieniają?
            </h2>
            <p>
                Banki centralne dostosowują stopy procentowe w odpowiedzi na sytuację gospodarczą.
                Najczęściej chodzi o kontrolowanie inflacji i utrzymanie stabilnego wzrostu gospodarczego.
            </p>
            <p>
                Podwyżka stóp procentowych zwykle ma na celu:
                <ol>
                    <li>ograniczenie inflacji</li>
                    <li>zmniejszenie popytu</li>
                    <li>zmniejszenie ilości pieniądza w obiegu</li>
                    <li>zmniejszenie ilości kredytów</li>
                    <li>zwiększenie oszczędności</li>
                    <li>zmniejszenie konsumpcji</li>
                </ol>
            </p>
            <p>
                Obniżka stóp procentowych zwykle ma na celu:
                <ol>
                    <li>Pobudzenie gospodarki</li>
                    <li>Zwiększenie inwestycji</li>
                    <li>Zwiększenie konsumpcji</li>
                    <li>Ułatwienie dostępu do kredtów</li>
                </ol>
            </p>
            <h2>Jak stopy procentowe wpływają na Twoje finanse?</h2>
            <p>
                Stopy procentowe mają bezpośredni wpływ na finanse. Wpływają na wysokość rat kredytów,
                oprocentowanie lokat, a także na ogólną sytuację gospodarczą. Wysokie stopy oznaczają  wyżesze raty kredytów czy
                oprocentowanie oszczędności.
            </p>
        </ArticleLayout>
    );
}
