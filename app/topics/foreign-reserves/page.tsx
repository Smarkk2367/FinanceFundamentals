import { ArticleLayout } from "@/components/ArticleLayout";
import { ForeignReservesSimulator } from "@/components/ForeignReservesSimulator";

export default function ForeignReservesPage() {
    return (
        <ArticleLayout
            title="Rezerwy dewizowe"
            description="Finansowa tarcza ochronna państwa w czasach globalnych kryzysów."
        >
            <h2>Czym są rezerwy dewizowe?</h2>
            <p>
                Rezerwy dewizowe to ogromny, narodowy „fundusz awaryjny” zarządzany przez bank centralny (w Polsce odpowiada za to Narodowy Bank Polski - NBP). 
                Składają się na niego potężne rezerwy płynnych aktywów, najczęściej trzymanych w bezpiecznych, obcych walutach takich jak <b>dolary amerykańskie (USD)</b> czy <b>euro (EUR)</b>, a także w formie bloków ugruntowanego historycznie <b>prawdziwego złota</b>.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
                <div className="bg-white border-2 border-brand-navy/10 rounded-xl p-6 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-brand-navy/5 p-4 rounded-full mb-4 ring-4 ring-brand-navy/5">
                        <span className="text-3xl">💵</span>
                    </div>
                    <h3 className="font-bold text-brand-navy mb-2">Waluty obce</h3>
                    <p className="text-sm text-gray-600">Gotówka na wielkich kontach. Służy do niezwykle szybkich interwencji giełdowych i spłacania rządowego długu zagranicznego.</p>
                </div>
                <div className="bg-white border-2 border-brand-gold/30 rounded-xl p-6 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-brand-gold/10 p-4 rounded-full mb-4 ring-4 ring-brand-gold/10">
                        <span className="text-3xl">🟡</span>
                    </div>
                    <h3 className="font-bold text-brand-navy mb-2">Złoto fizyczne</h3>
                    <p className="text-sm text-gray-600">Ostateczna kotwica bezpieczeństwa. Całkowicie niezależna od woli i kondycji innych państw.</p>
                </div>
                <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-green-50 p-4 rounded-full mb-4 ring-4 ring-green-50">
                        <span className="text-3xl">📄</span>
                    </div>
                    <h3 className="font-bold text-brand-navy mb-2">Papiery wartościowe</h3>
                    <p className="text-sm text-gray-600">Państwowe obligacje czołowych gospodarek zachodnich, przynoszące niewielki, bezpieczny zysk z odsetek.</p>
                </div>
            </div>

            <h2>Po co państwu taki skarbiec?</h2>
            <ul className="list-disc pl-6 space-y-4 mb-10 text-lg">
                <li>
                    <strong>Obrona kursu własnej waluty:</strong> Kiedy wybucha panika i spekulanci wyprzedają złotego (co powoduje, że PLN traci na wartości, a chleb, prąd i smartfony mocno drożeją dla nas wszystkich), NBP może masowo rzucić na rynek swoje żelazne zasoby dolarów, aby skupić wokół świata złotówki. Tak ubywa rezerw z Sejfu i równocześnie umacnia się lokalny pieniądz.
                </li>
                <li>
                    <strong>Wiarygodność państwa:</strong> Silnie zaopatrzony kraj łatwiej i taniej pożycza pieniądze z zagranicy. Bogaci inwestorzy kupujący obligacje państwowe widzą na raportach, że państwo na pewno będzie w stanie ich ewentualnie spłacić – nawet w razie krachu gospodarczego w rolnictwie czy eksporcie zagranicznym.
                </li>
            </ul>
            
            <hr className="my-10 border-gray-200" />
            
            <p className="font-medium text-xl text-brand-navy mt-10 text-center">Spróbuj teraz wcielić się w prezesa NBP w krytycznym dla narodu momencie giełdowym poniżej!</p>

            <ForeignReservesSimulator />

        </ArticleLayout>
    );
}
