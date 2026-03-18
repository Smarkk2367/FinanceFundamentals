import { ArticleLayout } from "@/components/ArticleLayout";
import { BudgetSimulator } from "@/components/BudgetSimulator";

export default function BudgetPage() {
    return (
        <ArticleLayout
            title="Budżet Domowy"
            description="Klucz to tego, by pieniądze pracowały dla Ciebie, a nie Ty dla nich."
        >
            <h2>Czym w ogóle jest budżet?</h2>
            <p>
                To brzmi skomplikowanie, jak zadanie dla korporacyjnych księgowych w krawatach. Nic bardziej mylnego! Budżet domowy to po prostu <strong>plan, w którym sam mówisz swoim pieniądzom dokąd mają iść zaraz po zaksięgowaniu wypłaty</strong>. Bez niego zazwyczaj pod koniec miesiąca zastanawiasz się, gdzie u licha one wszystkie się podziały. Świadome zarządzanie własnym budżetem to absolutna podstawa i start do wolności finansowej.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                <div className="bg-white border-2 border-green-200 rounded-xl p-8 shadow-sm transition-transform hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-green-800 border-b-2 border-green-100 pb-3 mb-4 flex items-center gap-3">
                        <span className="bg-green-100 p-2 rounded-lg">📈</span> Przychody (Twój kapitał)
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Wszystkie pieniądze, które sumarycznie wpływają na Twoje konto w danym miesiącu. Są to nie tylko wyczekiwane wypłaty z etatu, ale także zyski ze sprzedaży ubrań, zwroty podatków, odsetki z rocznych lokat czy prezenty gotówkowe "do koperty". To Twoja "amunicja".
                    </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-xl p-8 shadow-sm transition-transform hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-red-800 border-b-2 border-red-100 pb-3 mb-4 flex items-center gap-3">
                        <span className="bg-red-100 p-2 rounded-lg">📉</span> Wydatki (Twoje koszty)
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Wszystko, na co wydajesz zdobyte środki. Dla łatwego rachunku i czystości umysłu, najprościej i najskuteczniej dzieli się na niezbędne "żelazne" koszty życia (bez których stracisz dach nad głową) oraz dobrowolne zachcianki.
                    </p>
                </div>
            </div>

            <h2>Co posiadasz a co jesteś winien? (Aktywa i Pasywa)</h2>
            <p className="mb-6">
                W finansach osobistych liczą się nie tylko Twoje comiesięczne wpływy i wydatki, ale także całkowity stan posiadanego majątku. Aby go poprawnie ocenić, specjaliści finansowi dzielą go na dwie główne kategorie: <strong>aktywa</strong> oraz <strong>pasywa</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10 not-prose">
                <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-sm transition-transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-green-800 border-b-2 border-green-100 pb-3 mb-4 flex items-center gap-3">
                        <span className="bg-green-100 p-2 rounded-lg">📈</span> Aktywa (Majątek)
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        <strong>Wszystko to, co posiada określoną wartość wymienną i z czasem generuje dodatkowy dochód.</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-brand-navy font-medium">
                        <li>Lokaty i konta oszczędnościowe pracujące na procent w banku.</li>
                        <li>Posiadane akcje spółek giełdowych lub jednostki funduszy ETF.</li>
                        <li>Nieruchomość przynosząca dochód z wynajmu.</li>
                        <li>Prawa autorskie i patenty.</li>
                    </ul>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-sm transition-transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-600 border-b-2 border-gray-200 pb-3 mb-4 flex items-center gap-3">
                        <span className="bg-gray-100 p-2 rounded-lg">📉</span> Pasywa (Zobowiązania)
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        <strong>Wszystko to, co stanowi Twoje zadłużenie i będzie w przyszłości generować kolejne koszty utrzymania.</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-gray-600">
                        <li>Kredyty gotówkowe i pożyczki konsumenckie udzielane przez parabanki.</li>
                        <li>Zadłużenie wynikające z używania karty kredytowej.</li>
                        <li>Przedmioty luksusowe szybko tracące na wartości (np. drogie auto z salonu wzięte na kredyt).</li>
                    </ul>
                </div>
            </div>

            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-10 border-l-4 border-brand-gold">
                <p className="mb-0 text-lg font-medium text-brand-navy">
                    Kluczową zasadą zdrowego zarządzania budżetem domowym jest świadome gromadzenie aktywów (które w przyszłości zasilą Twój budżet odsetkami) i bardzo ostrożne zaciąganie pasywów (które stanowią gwarantowane obciążenie dla portfela na całe lata).
                </p>
            </div>

            <h2>Złota Reguła 50/30/20</h2>
            <p>
                Najpopularniejsza, najprzyjemniejsza i niesamowicie skuteczna metoda organizowania swoich pieniędzy z etatu nosi nazwę "50/30/20". Polega ona na natychmiastowym podzieleniu zarobków na trzy proste "wiadra" tuż po kliknięciu przelewu od szefa:
            </p>

            <ul className="list-disc pl-6 space-y-5 mb-10 text-brand-navy md:text-lg">
                <li className="pl-2">
                    <strong className="text-brand-gold">50% — Koszty Stałe Życia (Potrzeby):</strong> Czynsz za mieszkanie lub gigantyczna rata kredytu hipotecznego, prąd, śmieci, woda, paliwo na dojazdy do pracy czy zakupy obiadowe w hipermarkecie. Wydatki konieczne do funkcjonowania. Bardzo ważne jest dążenie do posiadania ich pod barierą 50%. Jeśli jest to np. 75% Twojej wypłaty – żyjesz na finansowej krawędzi i zwolnienie z pracy natychmiast oznacza bezdomność ze względu na zero manewru.
                </li>
                <li className="pl-2">
                    <strong className="text-brand-gold">30% — Zachcianki:</strong> Tu leży szczęście! Wyjścia do świetnej restauracji pociągiem, nowy pad do gry, Netflix, bilety na siłownię czy kolejna kurtka zimowa, która mocno Ci się spodobała.
                </li>
                <li className="pl-2">
                    <strong className="text-brand-gold">20% — Oszczędności i Inwestycje:</strong> Kategoria na którą płacisz w pierwszej kolejności tuż przed "zachciankami". To z niej spłacasz nadmierne wysoko-oprocentowane długi konsumenckie i raty za telefon, budujesz mityczną "poduszkę na czarną godzinę", a następnie wrzucasz to, co zostanie na giełdowe platformy maklerskie ETF jako kapitał startujący Twoją potęgę "procentu składanego".
                </li>
            </ul>
            
            <hr className="my-10 border-gray-200" />
            
            <p className="font-bold text-2xl text-brand-navy mt-10 text-center">Sprawdź na własnej skórze, czy nie ukręcisz na siebie finansowego bata!</p>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Przetestuj interaktywny symulator Reguły 50/30/20 ustalając swoje stałe zarobki oraz manipulując wydatkami na planszy. Zdobądź ocenę budżetową.</p>

            <BudgetSimulator />

        </ArticleLayout>
    );
}
