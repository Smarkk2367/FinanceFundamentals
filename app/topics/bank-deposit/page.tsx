import { ArticleLayout } from "@/components/ArticleLayout";
import { BankDepositSimulator } from "@/components/BankDepositSimulator";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export default function BankDepositPage() {
    return (
        <ArticleLayout
            title="Lokata bankowa"
            description="Jak bezpiecznie i bez potężnego wysiłku chronić duże pieniądze przed cichym złodziejem - inflacją."
        >
            <h2>Czym dokładnie jest Lokata (Deposit)?</h2>
            <p className="mb-8">
                Wyobraź sobie, że idziesz do komercyjnego banku i przekazujesz pracownikowi walizkę swojego kapitału z twardą obietnicą <strong>"Nie tknę tych pieniędzy przez cały okrągły rok, możecie nimi w tym czasie bezstresowo operować"</strong>.
                Bank bardzo cieszy się z gotówki, której może bezpiecznie używać jako dźwigni udzielając w międzyczasie pożyczek innym firmom, i w zamian za tę niesamowitą dla niego usługę ("zamrożenie"), wynagradza Cię gwarantowanymi odsetkami. Składasz – blokujesz – zyskujesz. Całkowicie pasywnie.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                <div className="bg-white border-2 border-brand-navy/10 rounded-xl p-8 shadow-sm transition-transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-brand-navy border-b-2 border-brand-navy-light/10 pb-4 mb-4 flex items-center gap-3">
                        <span className="bg-brand-navy-light/10 p-2 rounded-lg text-2xl">🔒</span> Żelazna Gwarancja (BFG)
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        W przeciwieństwie do rynków giełdowych pełnych pęknięć (jak giełda akcji, czy osławione rynki krypto), lokata uchodzi za <strong>najbezpieczniejszą formę oszczędzania w historii finansów.</strong>
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Każdy oficjalny bank w państwie objęty jest ścisłym, twardym Bankowym Funduszem Gwarancyjnym (BFG). W praktyce oznacza to – w uproszczeniu – że nawet gdyby Twój bank całkowicie, z dnia na dzień upadł i zamknął oddziały, Państwo przejmuje zobowiązania i rygorystycznie zwraca Ci równowartość Twoich depozytów (chroniąc Twój absolutny kapitał ustawowo do rzędu 100 tysięcy Euro – czyli ok. ponad 400 000 zł!). Dlatego tak chętnie chowają się tu wielkie awaryjne oszczędności klasy średniej.
                    </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-xl p-8 shadow-sm transition-transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-red-800 border-b-2 border-red-100 pb-4 mb-4 flex items-center gap-3">
                        <span className="bg-red-50 p-2 rounded-lg text-2xl">🚧</span> Ograniczenia Wolności
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        Bezpieczeństwo i gwarancja mają swoją ustaloną cenę manipulacyjną: <strong>"Mrożenie gotówki".</strong>
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Umowa na lokatę jest jasna. Otwierasz ją na ustalony z góry czas (np. na twarde 3, 6, 12 lub nawet długofalowo 24 miesiące). 
                        Jeżeli z powodów wypadków życiowych "pękniesz", udasz się do oddziału i przedwcześnie wyciągniesz swój kapitał (zerwiesz powiernictwo zamrożenia), bank momentalnie ukara Cię utratą wszystkich lub przeważającej większości obiecanych początkowo na banerze reklamowym odsetek! Nie tracisz kwoty wkładu (swojego), ale tracisz wypracowany profit (nawet z 11.5 miesiąca).
                    </p>
                </div>
            </div>

            <h2>Czy podatek potrafi uszczypnąć zysk? ("Podatek Belki")</h2>
            <p>
                Chcąc zdeponować pieniądze, idziesz po galerii handlowej, podnosisz wzrok nad placówkę i widzisz wielkim drukiem: <strong>"Świetna Lokata na ogromne 7%!"</strong>. Super! Składasz podaną gotówkę. Problem pojawia się w momencie wypłaty, gdy orientujesz się, że... dostajesz wypłatę nieco chudszą. Co się tak naprawdę stało?
            </p>
            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <p className="mb-0 text-gray-800 leading-relaxed text-sm">
                    Od zarobionych z Twojej perspektywy i ciężkiej próby zamrożenia odsetek bank (jako powolny inkasent dla polskiego aparatu państwa), pobiera natychmiastowo obligatoryjny tzw. <strong>"Podatek od dochodów kapitałowych"</strong> wprowadzony historycznie przez finansistę o nazwisku Belka (skąd popularna w narodzie nazwa – <em>"Podatek Belki"</em>).
                    Obecnie w Polsce wynosi on <strong>równe 19% z wygenerowanego na czysto ułamku obiecanych Ci na lokacie Twoich własnych zysków</strong>. Płacisz go zawsze, gdy czerpiesz dochody "nie pracując rączkami", lecz z rosnącego przez lokowanie samej gotówki kapitału.
                </p>
            </div>

            <BankDepositSimulator />

        </ArticleLayout>
    );
}
