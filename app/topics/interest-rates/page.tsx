import { ArticleLayout } from "@/components/ArticleLayout";
import { InterestRateSimulator } from "@/components/InterestRateSimulator";

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

            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <p className="mb-0 text-lg font-medium text-brand-navy">
                    Przykładowo: jeśli stopa procentowa wynosi 5% rocznie, oznacza to, że pożyczając 1000 zł na rok, należy oddać około 1050 zł.
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

            <hr className="my-8 border-gray-200" />

            <h2>Dlaczego stopy procentowe się zmieniają?</h2>
            <p>
                Banki centralne dostosowują stopy procentowe w odpowiedzi na sytuację gospodarczą.
                Najczęściej chodzi o kontrolowanie inflacji i utrzymanie stabilnego wzrostu gospodarczego.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Podwyżka stóp</h3>
                    <p className="text-sm text-gray-600 mb-4">Zwykle ma na celu "ochłodzenie" gospodarki i wyhamowanie nadmiernego wzrostu cen.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>Ograniczenie inflacji</li>
                        <li>Zmniejszenie popytu</li>
                        <li>Zmniejszenie ilości pieniądza w obiegu</li>
                        <li>Zmniejszenie ilości kredytów</li>
                        <li>Zwiększenie oszczędności</li>
                        <li>Zmniejszenie konsumpcji</li>
                    </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-green-600 mb-4">Obniżka stóp</h3>
                     <p className="text-sm text-gray-600 mb-4">Zwykle ma na celu ożywienie "ospałej" gospodarki i ułatwienie napływu kapitału.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>Pobudzenie gospodarki</li>
                        <li>Zwiększenie inwestycji</li>
                        <li>Zwiększenie konsumpcji</li>
                        <li>Ułatwienie dostępu do kredytów</li>
                    </ul>
                </div>
            </div>

            <InterestRateSimulator />

            <div className="bg-brand-navy text-white p-8 rounded-xl my-10 border border-brand-navy-light shadow-lg not-prose">
                <h3 className="text-2xl font-bold text-brand-gold mb-4 mt-0">Jak stopy procentowe wpływają na Twoje finanse?</h3>
                <p className="text-white/90 leading-relaxed">
                    Stopy procentowe mają bezpośredni wpływ na finanse domowe. Wpływają na wysokość rat kredytów,
                    oprocentowanie lokat, a także na ogólną sytuację gospodarczą. Wysokie stopy oznaczają  wyższe raty kredytów, ale za to również wyższe oprocentowanie Twoich oszczędności w banku!
                </p>
            </div>
        </ArticleLayout>
    );
}
