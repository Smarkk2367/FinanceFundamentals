"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { TrendingDown } from "lucide-react";

export function InflationCalculator() {
  const [amount, setAmount] = useState(1000);
  const [inflationRate, setInflationRate] = useState(5);
  const [years, setYears] = useState(5);

  const realValue = amount / Math.pow(1 + inflationRate / 100, years);
  const lossPercentage = ((amount - realValue) / amount) * 100;

  return (
    <Card className="my-10 border-gray-200 shadow-md not-prose">
      <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-2">
          <TrendingDown className="h-6 w-6 text-brand-gold" />
          <CardTitle className="text-xl text-brand-navy">Kalkulator Siły Nabywczej</CardTitle>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Zobacz, jak inflacja zjada Twoje niezainwestowane oszczędności w czasie.
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Kwota oszczędności</span>
                <span className="font-bold">{amount.toLocaleString('pl-PL')} PLN</span>
              </label>
              <input 
                type="range" min="100" max="100000" step="100" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-brand-gold"
              />
            </div>

            <div>
              <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Średnia roczna inflacja</span>
                <span className="font-bold">{inflationRate}%</span>
              </label>
              <input 
                type="range" min="0" max="25" step="0.5" 
                value={inflationRate} 
                onChange={(e) => setInflationRate(Number(e.target.value))}
                className="w-full accent-brand-gold"
              />
            </div>

            <div>
              <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Czas</span>
                <span className="font-bold">{years} lat(a)</span>
              </label>
              <input 
                type="range" min="1" max="30" step="1" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-brand-gold"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 bg-brand-navy text-white p-6 rounded-xl">
            <div>
              <p className="text-sm text-gray-300 mb-1">Realna siła nabywcza po {years} latach:</p>
              <p className="text-4xl font-extrabold text-brand-gold">
                {realValue.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} PLN
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Za dzisiejsze {amount} PLN kupisz tyle samo, co za {realValue.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} PLN obecnie.
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm text-gray-300">Utrata wartości pieniądza:</p>
              <p className="text-2xl font-semibold text-red-400">
                -{lossPercentage.toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
