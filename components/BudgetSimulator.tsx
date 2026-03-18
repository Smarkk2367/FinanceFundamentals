"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Wallet, PiggyBank, Coffee, Home, AlertTriangle, CheckCircle2, TrendingDown } from "lucide-react";

export function BudgetSimulator() {
    const [income, setIncome] = useState(5000);
    const [needs, setNeeds] = useState(2500);
    const [wants, setWants] = useState(1500);
    const [savings, setSavings] = useState(1000);

    const totalSpent = needs + wants + savings;
    const isDeficit = totalSpent > income;
    const leftover = income - totalSpent;
    const needsPct = Math.round((needs / income) * 100);
    const wantsPct = Math.round((wants / income) * 100);
    const savingsPct = Math.round((savings / income) * 100);
    const maxBound = Math.max(income, totalSpent);
    const renderNeedsWidth = (needs / maxBound) * 100;
    const renderWantsWidth = (wants / maxBound) * 100;
    const renderSavingsWidth = (savings / maxBound) * 100;

    let statusBox = null;

    if (isDeficit) {
        statusBox = (
            <div className="bg-red-50 border-2 border-red-200 text-red-900 p-6 rounded-xl flex gap-4 items-start shadow-sm mt-8 transition-colors">
                <TrendingDown className="h-8 w-8 shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-lg mb-1">Deficyt! Zaciągasz nowy dług!</h4>
                    <p className="text-sm leading-relaxed">Wydajesz więcej ({totalSpent} PLN) niż zarabiasz ({income} PLN). Jesteś pod kreską o {-leftover} PLN. Żyjesz ponad stan i musisz finansować swoje miesiące z karty kredytowej lub oszczędności. Tnij koszty natychmiast!</p>
                </div>
            </div>
        );
    } else if (leftover > 0) {
        statusBox = (
            <div className="bg-yellow-50 border-2 border-yellow-200 text-yellow-900 p-6 rounded-xl flex gap-4 items-start shadow-sm mt-8 transition-colors">
                <AlertTriangle className="h-8 w-8 shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-lg mb-1">Pieniądze tracą na wartości!</h4>
                    <p className="text-sm leading-relaxed">Pozostało Ci {leftover} PLN wolnych środków, które nie mają żadnego przypisanego zadania. Inflacja zjada ich siłę nabywczą. Przydziel je czym prędzej do puli oszczędności/inwestycji, by na Ciebie pracowały!</p>
                </div>
            </div>
        );
    } else {
        if (needsPct > 60) {
            statusBox = (
                <div className="bg-orange-50 border-2 border-orange-200 text-orange-900 p-6 rounded-xl flex gap-4 items-start shadow-sm mt-8 transition-colors">
                    <AlertTriangle className="h-8 w-8 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg mb-1">Ostrzeżenie o płynności!</h4>
                        <p className="text-sm leading-relaxed">Budżet spina się co do grosza, ale twoje stałe koszty życia wynoszą aż {needsPct}%. Jesteś o krok od uduszenia finansowego przy utracie pracy. Postaraj się zejść w kierunku 50% ratami lub tańszym mieszkaniem.</p>
                    </div>
                </div>
            );
        } else if (savingsPct < 15) {
            statusBox = (
                <div className="bg-orange-50 border-2 border-orange-200 text-orange-900 p-6 rounded-xl flex gap-4 items-start shadow-sm mt-8 transition-colors">
                    <AlertTriangle className="h-8 w-8 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg mb-1">Zbyt skromne oszczędności!</h4>
                        <p className="text-sm leading-relaxed">Przelewasz na przyszłość tylko {savingsPct}%. Rozrywka {wantsPct}% jest super, ale zbyt niska stopa oszczędzania wydłuża moment zbudowania bezpieczeństwa. Podciągnij to do 20%.</p>
                    </div>
                </div>
            );
        } else {
            statusBox = (
                <div className="bg-green-50 border-2 border-green-200 text-green-900 p-6 rounded-xl flex gap-4 items-start shadow-sm mt-8 transition-colors">
                    <CheckCircle2 className="h-8 w-8 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg mb-1">Złoty podział! Idealny plan.</h4>
                        <p className="text-sm leading-relaxed">Twój budżet ma poprawną poduszkę oszczędności ({savingsPct}%), mnóstwo miejsca na radość z życia ({wantsPct}%) i bardzo bezpieczny narzut rat na koszty życia. Masz pełną kontrolę nad pieniądzem!</p>
                    </div>
                </div>
            );
        }
    }

    return (
        <Card className="my-10 border-gray-200 shadow-md not-prose">
            <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                    <Wallet className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-xl text-brand-navy">Kreator Reguły 50/30/20</CardTitle>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Wpisz swój domyślny przychód, a następnie swobodnie modyfikuj koszty stałe, wydatki potoczne oraz zadeklarowane oszczędności za pomocą suwaków. Zobacz kiedy wpadniesz w długi, a kiedy obronisz płynność!
                </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">

                {/* Income */}
                <div className="mb-8 max-w-xl mx-auto bg-gray-50/80 p-6 rounded-xl border border-gray-200 shadow-inner">
                    <label className="flex flex-col items-center justify-center text-sm font-medium text-gray-700 mb-6 text-center">
                        <span className="text-gray-500 mb-2 font-bold uppercase tracking-wider text-xs">Miesięczny Przychód na rękę (PLN)</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-black text-brand-navy">{income}</span>
                        </div>
                    </label>
                    <input
                        type="range" min="2000" max="25000" step="100"
                        value={income}
                        onChange={(e) => setIncome(Number(e.target.value))}
                        className="w-full accent-green-600 h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                {/* Progress Bar Visualizer */}
                <div className="mb-10 w-full bg-gray-100 h-8 rounded-full flex overflow-hidden border border-gray-200">
                    {/* Needs Bar */}
                    <div className="bg-blue-500 h-full flex items-center justify-center text-xs text-white font-bold transition-all duration-300" style={{ width: `${renderNeedsWidth}%` }}>
                        {needsPct > 5 ? `${needsPct}%` : ''}
                    </div>
                    {/* Wants Bar */}
                    <div className="bg-orange-400 h-full flex items-center justify-center text-xs text-white font-bold transition-all duration-300" style={{ width: `${renderWantsWidth}%` }}>
                        {wantsPct > 5 ? `${wantsPct}%` : ''}
                    </div>
                    {/* Savings Bar */}
                    <div className="bg-brand-gold h-full flex items-center justify-center text-xs text-white font-bold transition-all duration-300" style={{ width: `${renderSavingsWidth}%` }}>
                        {savingsPct > 5 ? `${savingsPct}%` : ''}
                    </div>
                    {/* Deficit Marker */}
                    {isDeficit && (
                        <div className="bg-red-500 h-full flex items-center justify-center text-xs text-white font-bold transition-all duration-300 flex-1 striped-bg">
                            DŁUG
                        </div>
                    )}
                </div>

                {/* Sliders Container */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Składnik 1: Potrzeby */}
                    <div className="border border-blue-200 bg-blue-50/50 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center gap-2 text-blue-800 font-bold mb-3 border-b border-blue-100 pb-2">
                            <Home className="w-5 h-5" /> Koszty Stałe
                        </div>
                        <div className="text-3xl font-black text-blue-900 mb-4">{needs} <span className="text-sm font-bold text-blue-700/60">PLN</span></div>
                        <input
                            type="range" min="0" max={income * 1.5} step="50"
                            value={needs}
                            onChange={(e) => setNeeds(Number(e.target.value))}
                            className="w-full accent-blue-500 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <p className="text-xs text-blue-800/60 mt-4 leading-snug">Czynsz, raty kredytu, żywność, opłaty. Opcjonalnie do 50%.</p>
                    </div>

                    {/* Składnik 2: Zachcianki */}
                    <div className="border border-orange-200 bg-orange-50/50 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center gap-2 text-orange-800 font-bold mb-3 border-b border-orange-100 pb-2">
                            <Coffee className="w-5 h-5" /> Zachcianki
                        </div>
                        <div className="text-3xl font-black text-orange-900 mb-4">{wants} <span className="text-sm font-bold text-orange-700/60">PLN</span></div>
                        <input
                            type="range" min="0" max={income * 1.5} step="50"
                            value={wants}
                            onChange={(e) => setWants(Number(e.target.value))}
                            className="w-full accent-orange-400 h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <p className="text-xs text-orange-800/60 mt-4 leading-snug">Restauracje, hobby, subskrypcje na grach. Opcjonalnie do 30%.</p>
                    </div>

                    {/* Składnik 3: Oszczędności */}
                    <div className="border border-yellow-200 bg-yellow-50/50 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center gap-2 text-yellow-800 font-bold mb-3 border-b border-yellow-100 pb-2">
                            <PiggyBank className="w-5 h-5" /> Inwestycje
                        </div>
                        <div className="text-3xl font-black text-yellow-900 mb-4">{savings} <span className="text-sm font-bold text-yellow-700/60">PLN</span></div>
                        <input
                            type="range" min="0" max={income * 1.5} step="50"
                            value={savings}
                            onChange={(e) => setSavings(Number(e.target.value))}
                            className="w-full accent-brand-gold h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <p className="text-xs text-yellow-800/60 mt-4 leading-snug">Spłata drogich długów, poduszka fiansowa. Minimum 20%.</p>
                    </div>
                </div>

                {statusBox}

            </CardContent>
            <style jsx>{`
                .striped-bg {
                    background-image: repeating-linear-gradient(
                        45deg,
                        rgba(255, 255, 255, 0.2),
                        rgba(255, 255, 255, 0.2) 10px,
                        transparent 10px,
                        transparent 20px
                    );
                }
            `}</style>
        </Card>
    );
}
