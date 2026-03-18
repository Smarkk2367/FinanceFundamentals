"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Calculator, TrendingUp, AlertCircle, Building, Package, ShoppingBag } from "lucide-react";

export function CostsSimulator() {
    const [fixedCosts, setFixedCosts] = useState(4000);
    const [variableCost, setVariableCost] = useState(6);
    const [price, setPrice] = useState(15);
    const [salesVolume, setSalesVolume] = useState(300);

    const revenue = salesVolume * price;
    const totalVariableCosts = salesVolume * variableCost;
    const totalCosts = fixedCosts + totalVariableCosts;
    const profit = revenue - totalCosts;

    const unitMargin = price - variableCost;
    const breakEvenPoint = unitMargin > 0 ? Math.ceil(fixedCosts / unitMargin) : Infinity;

    const isDeficit = profit < 0;

    return (
        <Card className="my-10 border-gray-200 shadow-md not-prose">
            <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-xl text-brand-navy">Symulator Biznesu: Kawiarnia z ciastkami</CardTitle>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Ustaw miesięczne koszty stałe wynajmu biznesu i wyprodukuj własne autorskie wypieki.
                    Zobacz kiedy zdołasz przebić próg rentowności i w końcu wyjdziesz na swoje! Pamiętaj, jeśli zaniżysz cenę poniżej kosztu stworzenia produktu, żaden próg nie istnieje!
                </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4 border-b border-gray-200 pb-2">
                            <Building className="w-4 h-4 text-brand-navy" /> Koszty Stałe Firmy
                        </label>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-black text-brand-navy">{fixedCosts}</span>
                            <span className="text-sm font-bold text-gray-500">PLN / mc</span>
                        </div>
                        <input
                            type="range" min="1000" max="15000" step="500"
                            value={fixedCosts}
                            onChange={(e) => setFixedCosts(Number(e.target.value))}
                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-brand-navy"
                        />
                        <p className="text-xs text-gray-500 mt-3">Czynsz za lokal, leasing ekspresu, ZUS.</p>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center gap-2 text-sm font-bold text-orange-900 mb-4 border-b border-orange-200 pb-2">
                            <Package className="w-4 h-4" /> Koszt 1 produktu (zmienny)
                        </label>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-black text-orange-700">{variableCost}</span>
                            <span className="text-sm font-bold text-orange-700/60">PLN / szt.</span>
                        </div>
                        <input
                            type="range" min="1" max="25" step="1"
                            value={variableCost}
                            onChange={(e) => setVariableCost(Number(e.target.value))}
                            className="w-full h-2 bg-orange-300 rounded-lg appearance-none cursor-pointer accent-orange-600"
                        />
                        <p className="text-xs text-orange-800/60 mt-3">Składniki (mąka, cukier) na 1 ciastko.</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm">
                        <label className="flex items-center gap-2 text-sm font-bold text-green-900 mb-4 border-b border-green-200 pb-2">
                            <ShoppingBag className="w-4 h-4" /> Twoja Cena Sprzedaży
                        </label>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-black text-green-700">{price}</span>
                            <span className="text-sm font-bold text-green-700/60">PLN / szt.</span>
                        </div>
                        <input
                            type="range" min="2" max="40" step="1"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full h-2 bg-green-300 rounded-lg appearance-none cursor-pointer accent-green-600"
                        />
                        <p className="text-xs text-green-800/60 mt-3">Kwota, którą ostatecznie widzi klient w menu.</p>
                    </div>
                </div>

                <div className="bg-brand-navy text-white rounded-xl p-6 mb-8 text-center shadow-lg relative overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <span className="uppercase tracking-widest text-brand-gold text-xs font-bold mb-3">Magiczny Punkt Opłacalności (Próg Rentowności BEP)</span>
                        {unitMargin <= 0 ? (
                            <div className="text-red-400 font-bold max-w-lg mt-2 mb-2">
                                <AlertCircle className="w-8 h-8 mx-auto mb-2 text-red-500" />
                                Katastrofa! Twoja cena za produkt ({price} PLN) jest niższa lub równa kosztom jego produkcji ({variableCost} PLN). Dopłacasz do każdego sprzedanego ciastka! Nie ma tu żadnego punktu opłacalności, firma tonie w długach.
                            </div>
                        ) : (
                            <div className="max-w-xl">
                                Aby wyjść w tym miesiącu całkowicie na 0 i spłacić wszystkie narzuty stałe, musisz znaleźć klientów na sztucznie zrobione ciasta w ilości równej:
                                <div className="text-3xl md:text-5xl font-black text-white my-4">{breakEvenPoint} sztuk!</div>
                                <span className="text-brand-navy-light text-sm">(Każde ciastko powyżej tej liczby to w pełni Twój czysty zysk do kieszeni).</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mb-8 mt-12 max-w-3xl mx-auto bg-white p-6 rounded-xl border-t-4 border-brand-gold shadow-sm">
                    <label className="flex flex-col items-center justify-center text-sm font-medium text-gray-700 mb-6 text-center">
                        <span className="text-gray-500 mb-2 font-bold uppercase tracking-wider text-xs">Miesięczna Sprzedaż Wolumenowa (Ilu masz w ogóle klientów?)</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-black text-brand-navy">{salesVolume}</span>
                            <span className="text-lg font-bold text-gray-400 ml-1">wydań</span>
                        </div>
                    </label>
                    <input
                        type="range" min="0" max="2500" step="50"
                        value={salesVolume}
                        onChange={(e) => setSalesVolume(Number(e.target.value))}
                        className="w-full accent-brand-gold h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                <div className={`p-8 rounded-xl border-4 transition-all duration-500 flex flex-col items-center text-center shadow-lg transform ${isDeficit ? 'bg-red-50 border-red-200 text-red-900 scale-100' : 'bg-green-50 border-green-400 text-green-900 scale-[1.02]'}`}>
                    <span className="uppercase font-extrabold tracking-widest text-xs mb-4 opacity-70">Ostateczny Podsumowujący Miesięczny Wynik Finansowy Kawiarni</span>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center opacity-80 mb-6 text-sm font-medium border-b border-black/10 pb-6">
                        <div className="flex flex-col">
                            <span className="opacity-70">Wpływy do kasy (Przychód)</span>
                            <span className="text-xl font-bold">{revenue} PLN</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="opacity-70">Odjęte Koszty Zmienne (Składniki)</span>
                            <span className="text-xl font-bold">-{totalVariableCosts} PLN</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="opacity-70">Odjęte Koszty Stałe (Czynsz)</span>
                            <span className="text-xl font-bold">-{fixedCosts} PLN</span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2">
                        <span className="text-sm font-bold mb-1">{isDeficit ? 'Brakuje Ci do spłacenia firmy' : 'Gratulacje, Twój czysty zysk ląduje w kieszeni!'}</span>
                        <span className={`text-4xl md:text-6xl font-black tracking-tight ${isDeficit ? 'text-red-600' : 'text-green-600'}`}>
                            {profit > 0 ? '+' : ''}{profit} <span className="text-2xl font-bold">PLN</span>
                        </span>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
