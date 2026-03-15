"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function CalculatorPage() {
    const [kapitalPoczatkowy, setKapitalPoczatkowy] = useState(1000);
    const [wplataMiesieczna, setWplataMiesieczna] = useState(200);
    const [okresLat, setOkresLat] = useState(10);
    const [oprocentowanieRoczne, setOprocentowanieRoczne] = useState(5);

    const calculate = () => {
        const rate = oprocentowanieRoczne / 100 / 12;
        const months = okresLat * 12;

        const fvPrincipal = kapitalPoczatkowy * Math.pow(1 + rate, months);

        let fvContributions = 0;
        if (rate > 0) {
            fvContributions = wplataMiesieczna * ((Math.pow(1 + rate, months) - 1) / rate);
        } else {
            fvContributions = wplataMiesieczna * months;
        }

        const totalZgromadzone = fvPrincipal + fvContributions;
        const totalWplacone = kapitalPoczatkowy + (wplataMiesieczna * months);
        const zysk = totalZgromadzone - totalWplacone;

        return { totalZgromadzone, totalWplacone, zysk };
    };

    const results = calculate();

    return (
        <div className="container px-4 md:px-6 py-12 md:py-24 mx-auto max-w-5xl">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-navy">
                    Kalkulator Oszczędności
                </h1>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                    Oblicz, jak procent składany może powiększyć Twoje oszczędności w czasie.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="shadow-md border-gray-200">
                    <CardHeader>
                        <CardTitle>Twoje Parametry</CardTitle>
                        <CardDescription>Dostosuj suwaki, aby zmienić symulację.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                <span>Kapitał początkowy</span>
                                <span className="font-bold">{kapitalPoczatkowy} PLN</span>
                            </label>
                            <input
                                type="range" min="0" max="50000" step="1000"
                                value={kapitalPoczatkowy}
                                onChange={(e) => setKapitalPoczatkowy(Number(e.target.value))}
                                className="w-full accent-brand-gold"
                            />
                        </div>

                        <div>
                            <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                <span>Wpłata miesięczna</span>
                                <span className="font-bold">{wplataMiesieczna} PLN</span>
                            </label>
                            <input
                                type="range" min="0" max="5000" step="100"
                                value={wplataMiesieczna}
                                onChange={(e) => setWplataMiesieczna(Number(e.target.value))}
                                className="w-full accent-brand-gold"
                            />
                        </div>

                        <div>
                            <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                <span>Okres oszczędzania</span>
                                <span className="font-bold">{okresLat} lat</span>
                            </label>
                            <input
                                type="range" min="1" max="40" step="1"
                                value={okresLat}
                                onChange={(e) => setOkresLat(Number(e.target.value))}
                                className="w-full accent-brand-gold"
                            />
                        </div>

                        <div>
                            <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                <span>Oczekiwane roczne oprocentowanie</span>
                                <span className="font-bold">{oprocentowanieRoczne}%</span>
                            </label>
                            <input
                                type="range" min="0" max="15" step="0.5"
                                value={oprocentowanieRoczne}
                                onChange={(e) => setOprocentowanieRoczne(Number(e.target.value))}
                                className="w-full accent-brand-gold"
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-brand-navy text-white shadow-xl border-none">
                    <CardHeader>
                        <CardTitle className="text-white">Wynik Symulacji</CardTitle>
                        <CardDescription className="text-gray-300">Magia procentu składanego w praktyce.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-brand-navy-light/50 p-6 rounded-xl border border-white/10">
                            <p className="text-sm text-gray-300 mb-1">Zgromadzony kapitał całkowity</p>
                            <p className="text-4xl font-extrabold text-brand-gold">
                                {results.totalZgromadzone.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} PLN
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span className="text-gray-300">Suma Twoich wpłat</span>
                                <span className="font-semibold">{results.totalWplacone.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} PLN</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span className="text-gray-300">Zysk z odsetek</span>
                                <span className="font-semibold text-green-400">+{results.zysk.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} PLN</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
