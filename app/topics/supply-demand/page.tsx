import { ArticleLayout } from "@/components/ArticleLayout";
import { SupplyDemandSimulator } from "@/components/SupplyDemandSimulator";

export default function SupplyDemandPage() {
    return (
        <ArticleLayout
            title="Popyt i Podaż"
            description="Dwie najpotężniejsze siły rządzące każdą gospodarką wolnorynkową."
        >
            <h2>Czym są Popyt i Podaż?</h2>
            <p>
                To dwie fundamentalne siły, które decydują o tym, ile kosztują produkty w sklepach i jak wiele się ich produkuje. 
                Można o nich myśleć jak o dwóch stronach tej samej monety – z jednej kupujący dążący do najniższych cen, z drugiej sprzedawcy marzący o zyskach.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-navy border-b border-gray-100 pb-3 mb-4">
                        Popyt (Kupujący)
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">
                        Ilość dobra, którą konsumenci są w stanie i chcą kupić po określonej cenie w danym momencie.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <span className="font-bold text-brand-navy block mb-1">Prawo Popytu:</span>
                        <span className="text-sm text-brand-navy/80">Gdy cena <strong>idzie w górę</strong>, chęć zakupu u ludzi zazwyczaj <strong>spada</strong>.</span>
                    </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-navy border-b border-gray-100 pb-3 mb-4">
                        Podaż (Sprzedawcy)
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">
                        Ilość dobra, którą producenci są w stanie i chcą zaoferować na sprzedaż po danej cenie.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <span className="font-bold text-brand-navy block mb-1">Prawo Podaży:</span>
                        <span className="text-sm text-brand-navy/80">Gdy cena <strong>idzie w górę</strong>, chęć produkcji i sprzedaży dla firm <strong>rośnie</strong> (bo rośnie ich potencjalny zysk).</span>
                    </div>
                </div>
            </div>

            <h2>Niewidzialna ręka rynku</h2>
            <p>
                Każdy wolny rynek dąży naturalnie do tak zwanego stanu <strong>Równowagi Rynkowej</strong>. 
                Jest to jedyny punkt, w którym ilość towaru pożądanego przez kupujących dokładnie zrównuje się z ilością oferowaną przez sprzedających.
                To właśnie ta krzyżówka decyduje o ostatecznej <strong>cenie rynkowej</strong> każdego produktu na półce sklepowej.
            </p>
            
            <p className="font-medium text-lg text-brand-navy mt-8">Sprawdź samemu jak to działa w praktyce wcielając się w bezlitosną „niewidzialną rękę rynku" ustalającą ceny lemoniady dla dzieci!</p>

            <SupplyDemandSimulator />

            <div className="bg-brand-navy text-white p-8 rounded-xl my-10 border border-brand-navy-light shadow-lg not-prose">
                <h3 className="text-2xl font-bold text-brand-gold mb-4 mt-0">Działanie tych praw w sytuacjach ekstremalnych</h3>
                <p className="text-white/90 leading-relaxed max-w-2xl mb-4">
                    Prawa popytu i podaży świetnie można zaobserwować w sytuacjach bardzo nietypowych lub kryzysowych. Wyobraź sobie straszliwie upalne lato i wyjazd na miejską plażę:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-white/80">
                    <li className="pl-2">Nagle w upalnym słońcu bez chmur wszystkim dramatycznie chce się pić – <strong>popyt na wodę w butelkach gwałtownie rośnie</strong>.</li>
                    <li className="pl-2">Sklepikarze przy plaży zauważają, że woda natychmiastowo znika z półek (podaż nie nadąża za popytem), i z powodu braków – <strong>podnoszą jej cenę podwójnie!</strong></li>
                    <li className="pl-2">Ponieważ woda staje się bardzo zyskowna (wyższa cena), dziesiątki nowych osób zaczynają przywozić butelki na plażę by łatwo zarobić (podaż rośnie).</li>
                    <li className="pl-2">W końcu bardzo wysoka cena sprawia, że część ludzi postanawia się napić się wody po powrocie z plaży. Popyt i Podaż powracają do swojej równowagi – woda znowu leży na półkach... ale <strong>punkt równowagi jest teraz na znacznie wyższej cenie bazowej</strong>.</li>
                </ul>
            </div>
        </ArticleLayout>
    );
}
