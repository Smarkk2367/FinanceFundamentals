"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ShoppingCart, Wallet, Ghost, Clock, AlertTriangle, RefreshCcw, HandCoins } from "lucide-react";

export function DeferredPaymentSimulator() {
    const STARTING_CASH = 1000;

    const [cash, setCash] = useState(STARTING_CASH);
    const [bnplDebt, setBnplDebt] = useState(0);
    const [purchased, setPurchased] = useState<{ name: string, type: string }[]>([]);
    const [isPayday, setIsPayday] = useState(false);

    const items = [
        { id: 1, name: "Markowe Buty XR-90", price: 650, icon: "👟" },
        { id: 2, name: "Gra Wideo (Edycja Limitowana)", price: 350, icon: "🎮" },
        { id: 3, name: "Złoty Zegarek Sportowy", price: 800, icon: "⌚" },
    ];

    const buyWithCash = (name: string, price: number) => {
        if (cash >= price) {
            setCash(prev => prev - price);
            setPurchased([...purchased, { name, type: "cash" }]);
        }
    };

    const buyWithBNPL = (name: string, price: number) => {
        setBnplDebt(prev => prev + price);
        setPurchased([...purchased, { name, type: "bnpl" }]);
    };

    const triggerPayday = () => {
        setIsPayday(true);
        setCash(prev => prev - bnplDebt);
    };

    const resetSim = () => {
        setCash(STARTING_CASH);
        setBnplDebt(0);
        setPurchased([]);
        setIsPayday(false);
    };

    const hasFailed = cash < 0;

    return (
        <Card className="my-10 border-gray-200 shadow-md not-prose">
            <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                    <Ghost className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-xl text-brand-navy">Pułapka Konsumpcjonizmu: BNPL</CardTitle>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Masz na start limitowane kieszonkowe. Zobacz do czego prowadzi iluzja "niepłacenia" i weź udział w darmowym sklepowym szale!
                    Płać twardą gotówką od razu i poczuj stratę, lub kliknij "Kup Teraz, Zapłać za 30 dni" by zabrać towar w ogóle nie tracąc pieniędzy z konta.
                    Gdy skończysz zakupy, wciśnij Przewiń Miesiąc.
                </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 mb-8 justify-between">
                    <div className={`flex-1 p-6 rounded-2xl border-2 flex items-center justify-between transition-colors ${!isPayday ? 'bg-blue-50 border-blue-200' : hasFailed ? 'bg-red-50 border-red-500 animate-pulse' : 'bg-green-50 border-green-200'}`}>
                        <div>
                            <span className="text-sm font-bold opacity-70 mb-1 block uppercase tracking-wide">
                                {isPayday ? (hasFailed ? 'Konto  w wielkim minusie!' : 'Przetrwałeś obciążenie') : 'Twoje Konto Bankowe'}
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className={`text-4xl font-black ${isPayday && hasFailed ? 'text-red-700' : 'text-blue-900'}`}>{cash}</span>
                                <span className="font-bold text-sm opacity-60">PLN</span>
                            </div>
                        </div>
                        <Wallet className={`w-10 h-10 ${isPayday && hasFailed ? 'text-red-400' : 'text-blue-400'}`} />
                    </div>

                    <div className="flex-1 bg-orange-50 border-2 border-orange-200 p-6 rounded-2xl flex items-center justify-between">
                        <div>
                            <span className="text-sm font-bold text-orange-900/70 mb-1 block uppercase tracking-wide">Narastający Dług Odroczony</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-orange-600">{bnplDebt}</span>
                                <span className="font-bold text-sm text-orange-600/60">PLN (do spłaty)</span>
                            </div>
                        </div>
                        <Clock className="w-10 h-10 text-orange-400" />
                    </div>
                </div>

                {!isPayday ? (
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl mb-8">
                        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><ShoppingCart className="w-5 h-5" /> Katalog Gadżetów</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {items.map(item => (
                                <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
                                    <div className="text-center mb-4">
                                        <div className="text-4xl mb-2">{item.icon}</div>
                                        <div className="font-bold text-sm text-gray-800">{item.name}</div>
                                        <div className="font-black text-brand-navy my-1">{item.price} PLN</div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {cash >= item.price ? (
                                            <button
                                                onClick={() => buyWithCash(item.name, item.price)}
                                                className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold text-xs py-2 px-3 rounded-lg transition-colors border border-blue-200"
                                            >
                                                Kup z Konta (Cash)
                                            </button>
                                        ) : (
                                            <button disabled className="bg-gray-100 text-gray-400 font-bold text-xs py-2 px-3 rounded-lg border border-gray-200 cursor-not-allowed">
                                                Brak gotówki
                                            </button>
                                        )}

                                        <button
                                            onClick={() => buyWithBNPL(item.name, item.price)}
                                            className="bg-brand-gold hover:bg-yellow-500 text-brand-navy font-black text-xs py-2 px-3 rounded-lg transition-colors shadow-sm relative overflow-hidden group"
                                        >
                                            KUP TERAZ, ZAPŁAĆ ZA 30 DNI ⭐
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center pt-6 border-t border-gray-200">
                            <button
                                onClick={triggerPayday}
                                className="bg-brand-navy hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest shadow-lg transition-transform hover:scale-105"
                            >
                                Mijają 30 dni – Uderzenie w konto
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={`p-8 rounded-2xl border-4 shadow-xl text-center mb-8 ${hasFailed ? 'bg-red-50 border-red-500/50' : 'bg-green-50 border-green-500/50'}`}>
                        {hasFailed ? (
                            <>
                                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
                                <h3 className="text-2xl font-black text-red-700 mb-2">PUŁAPKA ZATRZAŚNIĘTA!</h3>
                                <p className="text-red-900/80 mb-6 font-medium">
                                    Podczas miesięcznych zakupów nie odczuwałeś "bólu płacenia", bo z konta nie znikały żadne liczby.
                                    Teraz po 30 dniach wszystkie odroczone płatności zaatakowały Twój rachunek Z JEDNEGO DNIA NA DRUGI, przebijając go mocno poniżej zera (Bank na minusie dolicza natychmiastowo karne 30% odsetek rocznych za debet na koncie!).
                                    A wystarczyło śledzić wydatki w głowie.
                                </p>
                            </>
                        ) : (
                            <>
                                <HandCoins className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-black text-green-700 mb-2">UDAŁO CI SIĘ PRZETRWAĆ</h3>
                                <p className="text-green-900/80 mb-6 font-medium">
                                    Mimo odroczenia płatności, udało Ci się utrzymać taką poduszkę finansową, by spłacić dług na koniec miesiąca bez wpadnięcia w dramatyczny debet lub w sidła komornika.
                                </p>
                            </>
                        )}
                        <button onClick={resetSim} className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-bold mx-auto transition-colors">
                            <RefreshCcw className="w-4 h-4" /> Zagraj i przemyśl to jeszcze raz
                        </button>
                    </div>
                )}

                {purchased.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Twoja szafa w tym miesiącu:</span>
                        <div className="flex flex-wrap gap-2">
                            {purchased.map((item, idx) => (
                                <span key={idx} className={`px-3 py-1 rounded-full text-xs font-bold border ${item.type === 'bnpl' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 'bg-blue-100 text-blue-800 border-blue-200'}`}>
                                    {item.name} ({item.type === 'bnpl' ? 'DŁUG' : 'GOTÓWKA'})
                                </span>
                            ))}
                        </div>
                    </div>
                )}

            </CardContent>
        </Card>
    );
}
