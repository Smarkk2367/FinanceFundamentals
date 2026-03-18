"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Calculator, Sparkles, TrendingUp, PiggyBank, Calendar, Coins } from "lucide-react";

export function CompoundInterestSimulator() {
    const [initialDeposit, setInitialDeposit] = useState(1000);
    const [monthlyContribution, setMonthlyContribution] = useState(300);
    const [years, setYears] = useState(15);
    const [interestRate, setInterestRate] = useState(8);

    const totalContributions = initialDeposit + (monthlyContribution * 12 * years);

    const r = interestRate / 100;
    const n = 12;
    const t = years;

    const principalCompound = initialDeposit * Math.pow(1 + r / n, n * t);
    const futureValueOrdinaryAnnuity = monthlyContribution * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

    const finalCompoundValue = Math.round(principalCompound + futureValueOrdinaryAnnuity);
    const pureInterestEarned = finalCompoundValue - totalContributions;

    return (
        <Card className="my-10 border-gray-200 shadow-md not-prose">
            <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-xl text-brand-navy">Kalkulator Ósmego Cudu Świata</CardTitle>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Ustaw stawkę początkową i zadeklaruj ile kieszonkowego lub pensji jesteś w stanie co miesiąc dorzucać do inwestycji. Zobacz zjawisko kuli śnieżnej w walce z trzymaniem oszczędności w "banku ziemskim" (w skarpecie).
                </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-white border-2 border-slate-200 p-6 rounded-xl flex flex-col justify-center items-center text-center shadow-sm">
                        <PiggyBank className="w-8 h-8 text-slate-400 mb-2" />
                        <span className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-2">Twoje wpłacone pieniądze (skarbonka)</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-slate-700">{totalContributions.toLocaleString('pl-PL')}</span>
                            <span className="text-sm font-bold text-slate-500">PLN</span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-6 rounded-xl flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                            <TrendingUp className="w-24 h-24" />
                        </div>
                        <TrendingUp className="w-8 h-8 text-green-600 mb-2 z-10" />
                        <span className="text-green-800 font-bold uppercase text-xs tracking-widest mb-2 z-10">Koniec inwestycji giełdowej (Magia)</span>
                        <div className="flex items-baseline gap-1 z-10">
                            <span className="text-3xl md:text-5xl font-black text-green-700">{finalCompoundValue.toLocaleString('pl-PL')}</span>
                            <span className="text-xl font-bold text-green-600">PLN</span>
                        </div>
                        <p className="text-xs text-green-800/80 font-bold bg-green-200/50 px-3 py-1 mt-3 rounded-full z-10">
                            +{pureInterestEarned.toLocaleString('pl-PL')} PLN samych odsetek!
                        </p>
                    </div>
                </div>
                <div className="mb-12 w-full flex h-6 rounded-full overflow-hidden shadow-inner border border-gray-200 bg-gray-100">
                    <div
                        className="bg-slate-400 h-full flex items-center pl-4 text-xs font-bold text-white transition-all duration-1000"
                        style={{ width: `${(totalContributions / finalCompoundValue) * 100}%` }}
                        title="Twój wkład"
                    >
                    </div>
                    <div
                        className="bg-green-500 h-full flex items-center pr-4 justify-end text-xs font-bold text-green-50 transition-all duration-1000"
                        style={{ width: `${(pureInterestEarned / finalCompoundValue) * 100}%` }}
                        title="Zarobione odsetki składane"
                    >
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center justify-between text-sm font-bold text-brand-navy mb-4">
                            Wpłata na start:
                            <span className="text-lg font-black">{initialDeposit} PLN</span>
                        </label>
                        <input
                            type="range" min="0" max="50000" step="1000"
                            value={initialDeposit}
                            onChange={(e) => setInitialDeposit(Number(e.target.value))}
                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-brand-navy"
                        />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center justify-between text-sm font-bold text-blue-900 mb-4">
                            Miesięczna dopłata:
                            <span className="text-lg font-black">{monthlyContribution} PLN</span>
                        </label>
                        <input
                            type="range" min="0" max="5000" step="50"
                            value={monthlyContribution}
                            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                            className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center justify-between text-sm font-bold text-purple-900 mb-4">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Czas na giełdzie:</span>
                            <span className="text-lg font-black">{years} Lat</span>
                        </label>
                        <input
                            type="range" min="1" max="50" step="1"
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            className="w-full h-2 bg-purple-300 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center justify-between text-sm font-bold text-orange-900 mb-4">
                            <span className="flex items-center gap-2"><Coins className="w-4 h-4" /> Średni zarobek roczny:</span>
                            <span className="text-lg font-black">{interestRate}%</span>
                        </label>
                        <input
                            type="range" min="1" max="25" step="1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full h-2 bg-orange-300 rounded-lg appearance-none cursor-pointer accent-orange-600"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
