"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Scale, Users, Store, CheckCircle2, AlertTriangle, TrendingDown } from "lucide-react";

export function SupplyDemandSimulator() {
    const [price, setPrice] = useState(5);

    const demand = 100 - (10 * price);
    const supply = 10 * price;

    const isEquilibrium = demand === supply;
    const isShortage = demand > supply;
    const isSurplus = supply > demand;

    return (
        <Card className="my-10 border-gray-200 shadow-md not-prose">
            <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-xl text-brand-navy">Symulator Rynku Lemoniady</CardTitle>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                    Przesuwaj suwak ceny kubka lemoniady i obserwuj nakładające się na siebie prawa popytu i podaży!
                </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
                <div className="mb-10 max-w-md mx-auto bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                    <label className="flex flex-col items-center justify-center text-sm font-medium text-gray-700 mb-6 text-center">
                        <span className="text-gray-500 mb-2 uppercase tracking-wider text-xs font-bold">Cena za kubek lemoniady</span>
                        <span className="text-5xl font-extrabold text-brand-navy">{price}<span className="text-2xl ml-1 text-brand-gold">PLN</span></span>
                    </label>
                    <input
                        type="range" min="1" max="9" step="1"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full accent-brand-gold h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs font-medium text-gray-400 mt-3 px-1">
                        <span>1 PLN (Tanio)</span>
                        <span>9 PLN (Drożyzna)</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
                        <h4 className="font-bold text-blue-800 flex items-center gap-2 mb-4">
                            <Users className="h-5 w-5" />
                            Kupujący (Popyt)
                        </h4>
                        <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                            <span className="text-sm text-gray-600 font-medium">Chętnych na zakup:</span>
                            <span className="text-3xl font-bold text-blue-600">{demand} os.</span>
                        </div>
                        <p className="text-xs text-blue-700/70 mt-3 text-center">
                            Im niższa cena, tym więcej chętnych by ugasić pragnienie.
                        </p>
                    </div>

                    <div className="border border-orange-200 rounded-xl p-5 bg-orange-50">
                        <h4 className="font-bold text-orange-800 flex items-center gap-2 mb-4">
                            <Store className="h-5 w-5" />
                            Sprzedawcy (Podaż)
                        </h4>
                        <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-orange-100 shadow-sm">
                            <span className="text-sm text-gray-600 font-medium">Wyprodukowano:</span>
                            <span className="text-3xl font-bold text-orange-600">{supply} porcji</span>
                        </div>
                        <p className="text-xs text-orange-700/70 mt-3 text-center">
                            Im wyższa cena powszechna, tym chętniej dzieciaki rozstawiają stoiska.
                        </p>
                    </div>
                </div>

                <div className={`p-6 rounded-xl border-2 text-center transition-colors duration-300 flex flex-col items-center justify-center space-y-2
                    ${isEquilibrium ? 'bg-green-50 border-green-200 text-green-800' : ''}
                    ${isShortage ? 'bg-red-50 border-red-200 text-red-800' : ''}
                    ${isSurplus ? 'bg-yellow-50 border-yellow-200 text-yellow-800' : ''}
                `}>
                    {isEquilibrium && (
                        <>
                            <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
                            <h3 className="text-xl font-bold">Równowaga Rynkowa!</h3>
                            <p className="text-sm">Idealna cena! Każdy wyprodukowany kubek lemoniady znalazł nabywcę.</p>
                        </>
                    )}
                    {isShortage && (
                        <>
                            <TrendingDown className="h-10 w-10 text-red-600 mb-2" />
                            <h3 className="text-xl font-bold">Niedobór na rynku!</h3>
                            <p className="text-sm">Cena jest zbyt niska. Chętnych jest więcej ({demand}) niż wyprodukowanej lemoniady ({supply}). Część klientów odchodzi z niczym! Brakuje {demand - supply} kubków.</p>
                        </>
                    )}
                    {isSurplus && (
                        <>
                            <AlertTriangle className="h-10 w-10 text-yellow-600 mb-2" />
                            <h3 className="text-xl font-bold">Nadwyżka na rynku!</h3>
                            <p className="text-sm">Cena jest zbyt wysoka. Wyprodukowano dużo lemoniady ({supply}), ale klientów jest mało ({demand}). Lemoniada się psuje! Zostanie {supply - demand} kubków strat.</p>
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
