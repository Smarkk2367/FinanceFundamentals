import { ArticleLayout } from "@/components/ArticleLayout";
import { CompoundInterestSimulator } from "@/components/CompoundInterestSimulator";

export default function SimpleCompoundInterestPage() {
    return (
        <ArticleLayout
            title="Procent prosty i składany"
            description="Zrozumienie, dlaczego Albert Einstein nazywał zjawisko procentu składanego 'Ósmym Cudem Świata'."
        >
            <h2>Czym w ogóle jest procent w finansach?</h2>
            <p className="mb-8">
                Wyobraź sobie, że wypożyczasz komuś świetną grę wideo. Ponieważ użyczałeś swoją własność na miesiąc i nie mogłeś sam w nią grać, znajomy w ramach podziękowania daje Ci za to garść cukierków. Odsetki to po prostu <strong>"cukierki" od pożyczonych pieniędzy</strong>!
                Gdy pożyczasz (np. biorąc pożyczkę) – płacisz odsetki bankowi za użyczenie Ci kapitału. Kiedy składasz pieniądze do banku (np. na lokatę) to Ty "pożyczasz" pieniądze bankowi, a on w zamian płaci odsetki prosto do Twojej kieszeni.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                <div className="bg-white border-2 border-brand-navy-light/30 rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-navy border-b-2 border-brand-navy-light/20 pb-4 mb-4 flex items-center gap-3">
                        <span className="bg-brand-navy-light/10 p-2 rounded-lg text-2xl">🌱</span> Procent Prosty
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        Odsetki są naliczane <strong>zawsze tylko od Twojej pierwotnej wpłaty</strong>. Zarabiasz stałą, niezmienną kwotę w każdym roku. Rośnie powoli, krok po kroku.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm text-gray-800">
                        <strong className="block mb-2 text-brand-navy">Przykład: 1000 zł na 10%</strong>
                        <ul className="space-y-1">
                            <li>Rok 1: Zarabiasz 100 zł. Masz 1100 zł.</li>
                            <li>Rok 2: Znowu 100 zł (10% z początkowego 1000). Masz 1200 zł.</li>
                            <li>Rok 3: Znowu 100 zł. Masz 1300 zł.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white border-2 border-brand-gold/40 rounded-xl p-8 shadow-sm scale-105 transform z-10 shadow-xl">
                    <h3 className="text-xl font-bold text-brand-gold border-b-2 border-brand-gold/30 pb-4 mb-4 flex items-center gap-3">
                        <span className="bg-brand-gold/10 p-2 rounded-lg text-2xl">🌲</span> Procent Składany
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        Naliczanie odsetek zarówno od kwoty początkowej jak i <strong>od odsetek z lat poprzednich</strong>! To powoduje lawinowe, tzw. "wykładnicze" mnożenie zysków, jak potrójna kula śnieżna.
                    </p>
                    <div className="bg-brand-gold/5 border border-brand-gold/30 p-4 rounded-lg text-sm text-brand-navy">
                        <strong className="block mb-2 text-brand-navy">Przykład: 1000 zł na 10%</strong>
                        <ul className="space-y-1">
                            <li>Rok 1: Zarabiasz 100 zł. Masz 1100 zł.</li>
                            <li>Rok 2: Zarabiasz od 1100! (110 zł). Masz 1210 zł.</li>
                            <li>Rok 3: Zarabiasz od 1210! (121 zł). Masz 1331 zł.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2>Magia Ósmego Cudu Świata</h2>
            <p>
                Albert Einstein w jednym z popularnych cytatów stwierdził, że <em>"Procent składany to ósmy cud świata. Ci, którzy go rozumieją, zarabiają na nim. Ci, którzy go nie rozumieją, muszą go płacić"</em>. 
            </p>
            <p>
                Różnica między procentem prostym a składanym w pierwszym roku jest zerowa. W piątym roku – niewielka. Ale jeśli inwestujesz z perspektywą 20, 30 lat (np. na emeryturę), procent składany tworzy pionową ścianę zysków, gdzie same wygenerowane z niczego dzienne odsetki przewyższają całkowitą miesięczną pensję państwową prezesa.
            </p>

            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold flex gap-4">
                <span className="text-3xl leading-none">⏳</span>
                <p className="mb-0 text-brand-navy leading-relaxed font-medium">
                    Głównym paliwem zapłonowym procentu składanego nie jest gigantyczna kwota startowa, ale sam <strong>CZAS</strong>. Osoba wrzucająca 200 zł miesięcznie i zaczynająca inwestować w wieku 18 lat będzie potężnie wręcz bogatsza na starość niż osoba rozpoczynająca inwestycje w wieku 40 lat wrzucająca 2000 zł miesięcznie!
                </p>
            </div>

            <CompoundInterestSimulator />

        </ArticleLayout>
    );
}
