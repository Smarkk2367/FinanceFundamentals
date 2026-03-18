import { ArticleLayout } from "@/components/ArticleLayout";
import { DeferredPaymentSimulator } from "@/components/DeferredPaymentSimulator";

export default function DeferredPaymentPage() {
    return (
        <ArticleLayout
            title="Płatność Odroczona (BNPL)"
            description="Dowiedz się, dlaczego giganci e-commerce błagają Cię, byś zapłacił im 'dopiero za wymarzone 30 dni'."
        >
            <h2>Czym jest BNPL (Buy Now, Pay Later)?</h2>
            <p className="mb-8">
                BNPL (Z ang. Kup Teraz, Zapłać Później) to obecnie absolutny król płatności w internecie. Przy finalizowaniu zamówienia w znanym e-sklepie widzisz kolorowy i migający przycisk pozwalający Ci wziąć wybrany towar natychmiast do szafy, kompletnie bez płacenia z góry! <strong>Odroczenie jest bezpłatne</strong> – sklep pozwala zapłacić dokładnie tę samą kwotę z paragonu na przykład za równe 30 dni od momentu wzięcia pudła do domu.
            </p>

            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <span className="text-sm font-bold opacity-60 uppercase tracking-widest block mb-2">Zastanów się:</span>
                <p className="mb-0 text-gray-800 leading-relaxed text-sm italic">
                    Dlaczego prywatnym korporacjom w ogóle zależy i tak agresywnie i chętnie proponują, żebyś z obcych pieniędzy ubrał się we wspaniałe luksusy bez ponoszenia odsetkowych kosztów finansowych... i płacił za to później? Gdzie leży haczyk w darmowości tej genialnie prostej pożyczki?!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                <div className="bg-white border-2 border-brand-navy/10 rounded-xl p-8 shadow-sm transition-transform hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black rotate-12">1</div>
                    <h3 className="text-xl font-bold text-brand-navy border-b-2 border-brand-navy/10 pb-4 mb-4 z-10 relative">
                        🧠 Eliminacja "Bólu Płacenia"
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4 relative z-10">
                        Badania behawioralne od lat dowodzą, że gdy odciągniesz w czasie psychiczną stratę gotówki (pomniejszenie salda na koncie np. po wypłacie) od natychmiastowego potężnego strzału radosnej dopaminy u użytkownika z otrzymania paczki kurierskich rąk, <strong>statystycznie ten konsument naładuje do wirtualnego wózka 50% więcej towarów</strong>. Ułatwiona rozrzutność bez konsekwencji psychologicznej blokady "braku gotówki w dłoni".
                    </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-xl p-8 shadow-sm transition-transform hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-red-600 text-6xl font-black rotate-12">2</div>
                    <h3 className="text-xl font-bold text-red-800 border-b-2 border-red-100 pb-4 mb-4 z-10 relative">
                        🔥 Pułapka odsetkowa (Karne RRSO)
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4 relative z-10">
                        Płatność jest genialnym wyjściem "całkowicie darmowym"... Ale tylko tak długo jak masz twardą finansową dyscyplinę. Jeżeli nie spłacisz mikropożyczki odraczającej do pełnego 30. dnia, BNPL ulega konwersji w <strong>dziki konsumencki kredyt o potężnym, destruktywnym dla rat RRSO</strong> plus opłaty karne za monity finansowe od obsługi firmy windykacyjnej. E-sklepy zarabiają góry złota operując na opłatach karnych z zapominalstwa młodych konsumentów w ferworze mody.
                    </p>
                </div>
            </div>

            <h2>Zjawisko lawinowego nakładania długów (Kaskada Czasowa)</h2>
            <p>
                Największe i bardzo bolesne rozczarowanie płatnościami z rzędu na 30 dni polega na utracie kontroli po tygodniu beztroskiego szału "klikania z odroczką". Ponieważ żadne zakupy nie dając Ci psychicznego hamulca usunięcia pieniędzy po autoryzacji bankowej sesji - naklikasz ich tyle u różnych sprzedawców, że <strong>wyzwalacz terminu do zapłaty nałoży się od nich wszystkich w jednym punkcie uderzenia tego samego dnia. </strong>
            </p>
            <p className="mb-8">
                Skutkuje to całkowitym rozstrzelaniem miesięcznej wypłaty z etatu pod gilotynę zwrotu chwilowych konsumenckich pożyczek BNPL – w najlepszym przypadku wyczyszczeniem salda życiowego ratunkowego na bezwzględne "zero".
            </p>

            <DeferredPaymentSimulator />

        </ArticleLayout>
    );
}
