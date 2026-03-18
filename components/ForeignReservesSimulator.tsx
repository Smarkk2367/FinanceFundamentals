"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Landmark, ArrowDownToLine, ShieldAlert, CircleDollarSign } from "lucide-react";

export function ForeignReservesSimulator() {
    const totalReservesStart = 150;
    const [intervention, setIntervention] = useState(0);

    const baseRate = 5.20;
    const rateEffect = intervention * 0.015;
    const currentRate = baseRate - rateEffect;
    const reservesLeft = totalReservesStart - intervention;

    let responseMessage = "";
    let responseColor = "";

    if (intervention === 0) {
        responseMessage = "Brak interwencji! Złoty jest ekstremalnie słaby, co dewastuje domowe portfele. Koszt importowanych aut i paliwa w Polsce ogromnie rośnie, pompując inflację. Inwestorzy na giełdzie wpadają w jeszcze większą panikę.";
        responseColor = "bg-red-50 border-red-200 text-red-900";
    } else if (intervention > 0 && intervention <= 25) {
        responseMessage = "Uspokajasz rynek punktowymi strzałami. Kurs EUR/PLN spada do o wiele bezpieczniejszych poziomów, chroniąc społeczeństwo przed falą inflacji. Państwo przy tym nadal zachowuje potężną 'żelazną rezerwę'. To bardzo solidne sterowanie kryzysem.";
        responseColor = "bg-green-50 border-green-200 text-green-900";
    } else if (intervention > 25 && intervention <= 80) {
        responseMessage = "Masywna wyprzedaż narodowych dolarów! Kurs złotego znów stał się niesamowicie mocny, jednak bank centralny gwałtownie wykrwawia się ze swoich ostatecznych rezerw. Jeśli ten kryzys potrwa kilka dni dłużej – ryzykujesz że państwu zabraknie amunicji do obrony!";
        responseColor = "bg-orange-50 border-orange-200 text-orange-900";
    } else if (intervention > 80 && intervention < 150) {
        responseMessage = "KRYTYCZNY STAN REZERW! Rzuciłeś na rynek prawie wszystko co mieliśmy. Kurs złotego powrócił do normy, ale państwo staje na krawędzi całkowitej niewypłacalności na arenie międzynarodowej. Igrałeś z ogniem.";
        responseColor = "bg-red-100 border-red-400 text-red-900";
    } else {
        responseMessage = "BANKRUCTWO NBP! Skarbiec świeci pustkami. Wyprzedałeś absolutnie wszystkie rezerwy dewizowe. Polska traci wiarygodność kredytową, waluta za moment podda się atakom spekulacyjnym, a zagranica odmawia nam pożyczek. To gospodarcza katastrofa!";
        responseColor = "bg-slate-900 border-black text-red-400";
    }

    return (
        <Card className="my-10 border-gray-200 shadow-md not-prose">
            <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                    <ShieldAlert className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-xl text-brand-navy">Obrona Waluty: Interwencja NBP</CardTitle>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Trwa wybuch globalnego kryzysu i narasta panika finansowa! Zagraniczni inwestorzy domyślnie uciekają do "bezpiecznych" walut i wyprzedają polskiego złotego, przez co kurs Euro przebija barierę paniki <strong>5,20 zł</strong>.
                    <br />Jako prezes NBP, uruchom rezerwy dewizowe w dolarach i skup za nie przecenionego złotego, by powstrzymać jego dalszy upadek.
                </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-brand-navy-light/20 rounded-xl p-5 bg-white shadow-sm flex flex-col justify-center items-center text-center">
                        <span className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-3">Aktualny Kurs EUR/PLN na Foreksie</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-6xl font-black text-brand-navy">{currentRate.toFixed(2)}</span>
                            <span className="text-2xl text-gray-500 font-bold">zł</span>
                        </div>
                        <p className="text-xs text-brand-navy/60 mt-4 flex items-center gap-1 bg-brand-navy-light/5 px-3 py-1.5 rounded-md font-medium">
                            Bezpieczny kurs docelowy przed kryzysem: ok. 4.40 zł
                        </p>
                    </div>

                    <div className="border border-brand-gold/30 rounded-xl p-5 bg-gradient-to-b from-brand-gold/10 to-transparent shadow-sm flex flex-col justify-center items-center text-center">
                        <span className="text-brand-navy/70 font-bold uppercase text-xs tracking-widest mb-3 flex items-center gap-2"><Landmark className="w-4 h-4" /> Narodowy Skarbiec NBP</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-6xl font-black text-brand-gold">{reservesLeft}</span>
                            <span className="text-xl text-brand-navy font-bold">Mld USD</span>
                        </div>
                        <div className="w-full bg-gray-200 h-3 rounded-full mt-5 overflow-hidden border border-gray-300">
                            <div className="bg-brand-gold h-full transition-all duration-300" style={{ width: `${(reservesLeft / totalReservesStart) * 100}%` }}></div>
                        </div>
                    </div>
                </div>

                <div className="mb-10 max-w-2xl mx-auto bg-gray-50/80 p-6 rounded-xl border border-gray-200 shadow-inner">
                    <label className="flex flex-col items-center justify-center text-sm font-medium text-gray-700 mb-6 text-center">
                        <span className="text-gray-600 mb-2 uppercase tracking-wide text-xs font-bold flex items-center gap-2"><CircleDollarSign className="w-5 h-5 text-green-600" /> Skala Rynkowej Interwencji (Sprzedaż Dolarów)</span>
                        <span className="text-4xl font-extrabold text-brand-navy">{intervention} <span className="text-lg ml-1 font-bold text-gray-500">Mld USD</span></span>
                    </label>
                    <input
                        type="range" min="0" max="150" step="5"
                        value={intervention}
                        onChange={(e) => setIntervention(Number(e.target.value))}
                        className="w-full accent-brand-gold h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs font-bold text-gray-400 mt-4 px-1">
                        <span>Brak działania (0 mld)</span>
                        <span>Całkowite bankructwo (150 mld)</span>
                    </div>
                </div>

                <div className={`p-6 rounded-xl border-2 transition-colors duration-500 flex gap-4 items-start shadow-sm ${responseColor}`}>
                    <ArrowDownToLine className="h-8 w-8 shrink-0 mt-1 opacity-80" />
                    <div>
                        <h4 className="font-bold text-lg mb-2">Decyzja i jej rynkowe skutki</h4>
                        <p className="text-sm leading-relaxed opacity-90">{responseMessage}</p>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
