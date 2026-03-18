"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { PiggyBank, Landmark, Percent, Scissors, HandCoins, ShieldCheck } from "lucide-react";

export function BankDepositSimulator() {
    const [deposit, setDeposit] = useState(10000);
    const [rate, setRate] = useState(6);
    const [months, setMonths] = useState(6);

    const annualInterest = deposit * (rate / 100);
    const grossProfit = annualInterest * (months / 12);

    const taxDeduction = +(grossProfit * 0.19).toFixed(2);
    const netProfit = +(grossProfit - taxDeduction).toFixed(2);

    const finalReturn = deposit + netProfit;

    return (
        <Card className="my-10 border-gray-200 shadow-md not-prose">
            <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-xl text-brand-navy">Bezpieczna Skrytka: Demaskator Lokaty (Podatek Belki)</CardTitle>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Ustaw parametry lokaty z bankowej reklamy (Kwotę zamrożenia, roczne Oprocentowanie promujące, i Czas trwania umowy w miesiącach). Zobacz, jak interwencja państwowego podatku dochodowego okroi "wielkie giełdowe zyski" z plakatu, zanim wyjdziesz z banku z gotówką.
                </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center gap-2 text-sm font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">
                            <PiggyBank className="w-4 h-4" /> Wpłacony Kapitał
                        </label>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-black text-blue-700">{deposit.toLocaleString()}</span>
                            <span className="text-sm font-bold text-blue-700/60">PLN</span>
                        </div>
                        <input
                            type="range" min="1000" max="100000" step="1000"
                            value={deposit}
                            onChange={(e) => setDeposit(Number(e.target.value))}
                            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                    </div>
                    <div className="bg-green-50/50 border border-green-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center gap-2 text-sm font-bold text-green-900 mb-4 border-b border-green-200 pb-2">
                            <Percent className="w-4 h-4" /> Reklama z Ulicy (RRSO Lokaty)
                        </label>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-black text-green-700">{rate}</span>
                            <span className="text-sm font-bold text-green-700/60">% / Rok</span>
                        </div>
                        <input
                            type="range" min="1" max="12" step="0.5"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                        />
                    </div>
                    <div className="bg-purple-50/50 border border-purple-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center gap-2 text-sm font-bold text-purple-900 mb-4 border-b border-purple-200 pb-2">
                            <Landmark className="w-4 h-4" /> Miesiące Zamrożenia
                        </label>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-black text-purple-700">{months}</span>
                            <span className="text-sm font-bold text-purple-700/60">msc w banku</span>
                        </div>
                        <input
                            type="range" min="1" max="36" step="1"
                            value={months}
                            onChange={(e) => setMonths(Number(e.target.value))}
                            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                    </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-200 relative">
                    <h3 className="text-center font-bold text-gray-500 uppercase tracking-widest text-xs mb-8">Rentgen Twojego Zysku</h3>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center flex-1">
                            <span className="text-sm font-bold text-gray-500 block mb-2">Zysk "Papierowy" (Brutto)</span>
                            <div className="text-3xl font-black text-gray-800">+{grossProfit.toFixed(2)} <span className="text-xl">zł</span></div>
                            <p className="text-xs text-gray-400 font-medium mt-1">To policzy kalkulator w głowie</p>
                        </div>
                        <div className="text-center flex-1 bg-red-50 p-4 rounded-xl border border-red-100 relative">
                            <div className="absolute -top-3 -right-3 bg-red-100 p-2 rounded-full border border-red-200">
                                <Scissors className="w-4 h-4 text-red-600 -rotate-90" />
                            </div>
                            <span className="text-sm font-bold text-red-800 block mb-2">Podatek Państwowy "Belki" 19%</span>
                            <div className="text-3xl font-black text-red-600">-{taxDeduction.toFixed(2)} <span className="text-xl">zł</span></div>
                            <p className="text-xs text-red-800/60 font-medium mt-1">Zabiera państwo polskie za sam zysk</p>
                        </div>
                        <div className="text-center flex-1 bg-green-50 p-4 rounded-xl border border-green-200 border-b-4 border-b-green-400">
                            <span className="text-sm font-bold text-green-900 block mb-2">Zysk "Na Rękę" (Netto)</span>
                            <div className="text-3xl font-black text-green-700">+{netProfit.toFixed(2)} <span className="text-xl">zł</span></div>
                            <p className="text-xs text-green-800/60 font-medium mt-1">Gwarantowany zysk za zamrożenie</p>
                        </div>

                    </div>
                </div>

                <div className="mt-8 flex justify-center items-center gap-3 bg-brand-navy text-white px-8 py-4 rounded-full max-w-lg mx-auto shadow-md">
                    <HandCoins className="w-6 h-6 text-brand-gold" />
                    <div>
                        <span className="opacity-80 text-sm font-medium mr-2">Ostateczna kwota na koncie po zakończeniu:</span>
                        <span className="text-2xl font-black text-brand-gold">{finalReturn.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-lg">PLN</span></span>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
