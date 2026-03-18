"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Search, Tag, Eye, Clock, CalendarDays, ThumbsUp, AlertTriangle } from "lucide-react";

export function CostPerUseSimulator() {
    const [price, setPrice] = useState(600);
    const [usesPerMonth, setUsesPerMonth] = useState(4);
    const [lifespanYears, setLifespanYears] = useState(1);

    const totalMonths = lifespanYears * 12;
    const totalUses = usesPerMonth * totalMonths;
    const costPerUse = totalUses > 0 ? (price / totalUses) : price;

    const isGarbage = costPerUse > 50;
    const isGreatValue = costPerUse < 5;

    return (
        <Card className="my-10 border-gray-200 shadow-md not-prose">
            <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                    <Search className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-xl text-brand-navy">Detektyw Prawdziwej Wartości (Cost-Per-Use)</CardTitle>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Sprawdź, czy Twój wymarzony zakup to dobra inwestycja we własne życie, czy jedynie przepalenie kasy na metkę.
                    Ustaw cenę przedmiotu na półce sklepu oraz szczerze oceń, jak często i jak długo ułatwi Ci on życie. Zobaczysz jego absolutną, rozebraną do naga wartość od użycia!
                </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm text-center">
                        <label className="flex items-center justify-center gap-2 text-sm font-bold text-gray-700 mb-4 border-b border-gray-200 pb-2">
                            <Tag className="w-4 h-4 text-brand-navy" /> Cena ze sklepowej metki
                        </label>
                        <div className="flex items-baseline justify-center gap-1 mb-4">
                            <span className="text-4xl font-black text-brand-navy">{price}</span>
                            <span className="text-sm font-bold text-gray-500">PLN</span>
                        </div>
                        <input
                            type="range" min="50" max="6000" step="50"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-brand-navy"
                        />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm text-center">
                        <label className="flex items-center justify-center gap-2 text-sm font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">
                            <Eye className="w-4 h-4" /> Użycia w miesiącu
                        </label>
                        <div className="flex items-baseline justify-center gap-1 mb-4">
                            <span className="text-4xl font-black text-blue-700">{usesPerMonth}</span>
                            <span className="text-sm font-bold text-blue-700/60">razy / mc</span>
                        </div>
                        <input
                            type="range" min="1" max="60" step="1"
                            value={usesPerMonth}
                            onChange={(e) => setUsesPerMonth(Number(e.target.value))}
                            className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm text-center">
                        <label className="flex items-center justify-center gap-2 text-sm font-bold text-green-900 mb-4 border-b border-green-200 pb-2">
                            <CalendarDays className="w-4 h-4" /> Czas przydatności
                        </label>
                        <div className="flex items-baseline justify-center gap-1 mb-4">
                            <span className="text-4xl font-black text-green-700">{lifespanYears}</span>
                            <span className="text-sm font-bold text-green-700/60">Lat do śmietnika</span>
                        </div>
                        <input
                            type="range" min="1" max="10" step="1"
                            value={lifespanYears}
                            onChange={(e) => setLifespanYears(Number(e.target.value))}
                            className="w-full h-2 bg-green-300 rounded-lg appearance-none cursor-pointer accent-green-600"
                        />
                    </div>
                </div>

                <div className="border border-brand-navy-light/20 bg-brand-navy-light/5 rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-inner justify-between">
                    <div className="flex-1">
                        <span className="uppercase tracking-widest text-brand-navy/60 text-xs font-bold mb-3 block">Twój prawdziwy, obnażony rachunek za jedno z użyć tej rzeczy:</span>
                        <div className="flex items-baseline gap-2 mt-4">
                            <span className={`text-6xl font-black tracking-tighter ${isGarbage ? 'text-red-500' : isGreatValue ? 'text-green-500' : 'text-brand-navy'}`}>
                                {costPerUse.toFixed(2)}
                            </span>
                            <span className="text-2xl font-bold text-gray-500">PLN / 1x</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 font-medium">Będziesz tego używał łącznie aż {totalUses} razy w ciągu reszty życia tego przedmiotu.</p>
                    </div>

                    <div className="flex-1 w-full border-t md:border-t-0 md:border-l border-gray-300 pt-6 md:pt-0 md:pl-8">
                        {isGarbage ? (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-red-600 font-bold mb-1">
                                    <AlertTriangle className="w-6 h-6" /> Tragedia zakupowa!
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Prawdopodobnie kupujesz ubiór ze znanej metki tylko dla szpanu, do założenia raz w roku na imprezę, lub przepuszczasz oszczędności na gadżet dla czystego impulsu po którym schowasz go do szafy. <strong>Sklep okrada Cię z wartości użytkowej.</strong>
                                </p>
                            </div>
                        ) : isGreatValue ? (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-green-600 font-bold mb-1">
                                    <ThumbsUp className="w-6 h-6" /> Fantastyczny interes!
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Świetna robota! Pomimo że na kasie w sklepie stracisz trochę gotówki (cena jest ceną), będziesz tego produktu używać tak zaciekle, solidnie i codziennie, że <strong>wyciągniesz z niego każdą złotówkę co do grosza</strong> budując ogromną Wartość!
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-brand-navy font-bold mb-1">
                                    <Clock className="w-6 h-6" /> Rynkowy Standard
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Koszt jednostkowego użycia tego sprzętu jest standardowy. Ani przepłacasz za iluzję bogactwa z reklamy, ani nie kupujesz rewolucji życiowej za bezcen. Zwyczajny, praktyczny deal – jeśli Cię na niego w 100% z marszu bez kredytu stać.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
