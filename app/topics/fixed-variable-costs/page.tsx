import { ArticleLayout } from "@/components/ArticleLayout";
import { CostsSimulator } from "@/components/CostsSimulator";

export default function FixedVariableCostsPage() {
    return (
        <ArticleLayout
            title="Koszty stałe i zmienne"
            description="Zrozumienie podziału obciążeń to klucz do rentowności absolutnie każdego biznesu."
        >
            <h2>Rodzaje pieniędzy wychodzących</h2>
            <p className="mb-8 text-gray-700 leading-relaxed">
                Niezależnie od tego, czy planujesz otworzyć wielką fabrykę sprzętu produkującą telefony komórkowe, lokalną przytulną kawiarnię bez personelu czy po prostu analizujesz miesięczny domowy budżet – wszystkie wydatki podlegają prostemu, matematycznemu prawu. Dzielą się na takie, o których będziesz musiał pamiętać bez względu na wszystko (są narzucone z góry), oraz na takie, które sprytnie dostosowują się do bieżącej skali Twojego biznesowego działania.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                <div className="bg-white border-2 border-brand-navy-light/40 rounded-xl p-8 shadow-sm transition-transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-brand-navy border-b-2 border-brand-navy-light/20 pb-4 mb-5 flex items-center gap-3">
                        <span className="bg-brand-navy/5 p-2 rounded-lg text-2xl">⚓</span> Koszty Stałe
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-5 font-medium bg-brand-navy-light/5 p-4 rounded-lg">
                        Tak zwana betonowa bryła biznesu. Koszty uiszczane co miesiąc bez absolutnie żadnego wpływu i bez względu na aktualny wymiar Twojej produkcji.
                    </p>
                    <p className="text-gray-600 text-sm mb-5">
                        Nawet jeśli firma ma przymusowy postój odgórny, w wypadku losowym jest to miesięczna seria niedziel niehandlowych albo Twoja wypasiona kawiarnia w centrum miasta stoi przez miesiąc całkowicie pusta nic nie robiąc – te koszty i tak uderzą na koniec miesiąca w portfel.
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-3 text-brand-navy font-bold">
                        <li>Abonament i wygórowany czynsz za wynajem lokalu użytkowego.</li>
                        <li>Raty leasingowe na zakupiony ekspres.</li>
                        <li>Stałej wysokości podatki (np. ryczałt ZUS) i ubezpieczenie obiektu.</li>
                        <li>Gwarantowane opłacenie pracowników etatowych niezależne od utargu.</li>
                    </ul>
                </div>

                <div className="bg-white border-2 border-brand-gold/40 rounded-xl p-8 shadow-sm transition-transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-brand-navy border-b-2 border-brand-gold/30 pb-4 mb-5 flex items-center gap-3">
                        <span className="bg-brand-gold/10 p-2 rounded-lg text-2xl">⚙️</span> Koszty Zmienne
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-5 font-medium bg-brand-gold/10 p-4 rounded-lg">
                        Bieżące opłaty, które rosną i spadają precyzyjnie oraz w 100 procentach proporcjonalnie do skali Twojej codziennej działalności handlowej.
                    </p>
                    <p className="text-gray-600 text-sm mb-5">
                        Najlepszy sprzymierzeniec rozkwitającej mikrofirmy. Jeśli nie wyprodukujesz i nie zamówisz w tym miesiącu absolutnie nic (np. wyjeżdżasz odpocząć biznesowo na wakacje marzeń lub klientów akura dzisiaj nie było), Twoje koszty zmienne wynoszą rówież 0 PLN. 
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-3 text-brand-navy font-bold">
                        <li>Faktyczne zużycie wody i prądu maszyn przez proces produkcji.</li>
                        <li>Zakup fizycznych surowców na zaplecze (mąki, owoców do tacek).</li>
                        <li>Masowe nabywanie jednorazowych kubeczków z logo i opakowań kartonowych dla gości z zewnątrz.</li>
                        <li>Wszelkie opłaty logistyczne dla zewnętrznych kurierów za wydane dostawy.</li>
                    </ul>
                </div>
            </div>

            <h2>Pułapka utonięcia u początkujących przedsiębiorców</h2>
            <p>
                Większość genialnych i bardzo wcześnie zamkniętych polskich firm upada na początku swojej drogi dokładnie z jednego, matematycznego powodu. Właściciele pragnąc wstrzelić się na wielki rynek nadmiernie pompują początkowe <strong>koszty stałe</strong>.
            </p>
            <p>Kupują od razu luksusowy i najdroższy sprzęt na raty z gigantycznym RRSO, wynajmują drogie, potężne biuro i podpisują bezsensowne, paroletnie firmowe abonamenty na systemy zarządzania – wszystko zanim firma zacznie przynosić choć złotówkę realnego dochodu. Nawet w przypadku tzw. <em>"chudych miesięcy testowych"</em> bez klienta biznes jest regularnie drenażowany na dziesiątki tysięcy złotych, co w ciągu dwóch kwartałów doprowadza projekt pod ziemię.</p>
            
            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-10 border-l-4 border-brand-gold flex items-start gap-4">
                <span className="text-4xl">💡</span>
                <p className="mb-0 text-brand-navy leading-relaxed font-medium mt-1">
                    Super nowoczesna elastyczna młodzieżowa firma <strong>(lean startup)</strong> szuka modelu by posiadać koszty stałe cięte całkowicie do minimum (pozwala to długotrwale utrzymać się i nie płacić nic, gdy brak nam klienta). Skupia się wyłącznie na płatnościach za wykonane zjawiska gospodarcze – przerzucając większość swojego utrzymania do bardzo elastycznej kategorii sprytnych <strong>kosztów zmiennych!</strong>
                </p>
            </div>

            <h2>Magiczny Punkt Opłacalności (Próg Rentowności)</h2>
            <p>
                Kiedy firma zarabia pierwszą złotówkę dla nas do skarbonki? W słowniku rynkowym nazywa się to <strong className="text-brand-gold">Break-Even Point (w skrócie - BEP)</strong>. 
                Punkt załamania rentowności następuje jest w ułamku sekundy, tym magicznym krótkim matematycznym momencie pod koniec miesiąca roboczego, w którym wszystkie dotychczasowe wpływy ze sprzedaży zdołają w pełni zbilansować (odejmując ułamkowe koszty jej zrobienia - czyli koszty zmienne poszczególnych ciastek nakładane np. na kuriera) ciężar absolutnie wszystkich, zadeklarowanych wcześniej odgórnie kosztów stałych wynajmu dla lokalu!
            </p>
            <p>Od tej granicy każda kolejna sprzedaż powiększa już w 100 procentach niezafałszowany zysk na Twoim prywantnym koncie.</p>

            <CostsSimulator />

        </ArticleLayout>
    );
}
