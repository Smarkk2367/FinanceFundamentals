"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Percent, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function InterestRateSimulator() {
  const [baseRate, setBaseRate] = useState(5.75); //Current NBP rate roughly
  const loanAmount = 300000;
  const loanYears = 25;
  const bankMargin = 2.0;

  const depositAmount = 50000;
  const depositBankFee = 1.0;

  const loanInterestRate = (baseRate + bankMargin) / 100 / 12;
  const loanMonths = loanYears * 12;
  const monthlyPayment = loanInterestRate === 0
    ? loanAmount / loanMonths
    : loanAmount * (loanInterestRate * Math.pow(1 + loanInterestRate, loanMonths)) / (Math.pow(1 + loanInterestRate, loanMonths) - 1);

  const depositInterestRate = Math.max(0, baseRate - depositBankFee) / 100;
  const annualProfit = depositAmount * depositInterestRate;
  const annualProfitAfterTax = annualProfit * 0.81; //19% as of 2026

  return (
    <Card className="my-10 border-gray-200 shadow-md not-prose">
      <CardHeader className="bg-brand-navy-light/5 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-2">
          <Percent className="h-6 w-6 text-brand-gold" />
          <CardTitle className="text-xl text-brand-navy">Symulator Decyzji RPP</CardTitle>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Zmień główną stopę procentową NBP i zobacz natychmiast, jak wpływa ona na koszt kredytu oraz zyski z lokaty.
        </p>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <div className="mb-10 max-w-md mx-auto bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
          <label className="flex flex-col items-center justify-center text-sm font-medium text-gray-700 mb-6 text-center">
            <span className="text-gray-500 mb-2 uppercase tracking-wider text-xs font-bold">Główna Stopa Referencyjna</span>
            <span className="text-5xl font-extrabold text-brand-navy">{baseRate.toFixed(2)}<span className="text-2xl ml-1 text-brand-gold">%</span></span>
          </label>
          <input
            type="range" min="0" max="15" step="0.25"
            value={baseRate}
            onChange={(e) => setBaseRate(Number(e.target.value))}
            className="w-full accent-brand-gold h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs font-medium text-gray-400 mt-3 px-1">
            <span>0% (Tani Pieniądz)</span>
            <span>15% (Lichwa)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-red-100 rounded-2xl p-6 bg-gradient-to-b from-red-50 to-white shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <ArrowUpRight className="w-32 h-32" />
            </div>
            <h4 className="font-bold text-red-700 flex items-center gap-2 mb-6 text-lg relative z-10">
              <span className="bg-red-100 p-2 rounded-lg"><ArrowUpRight className="h-5 w-5" /></span>
              Kredyt Hipoteczny
            </h4>
            <div className="space-y-4 text-sm relative z-10">
              <div className="flex justify-between items-center border-b border-red-100 pb-2">
                <span className="text-gray-600">Kwota kredytu:</span>
                <span className="font-semibold text-gray-900">{loanAmount.toLocaleString('pl-PL')} PLN</span>
              </div>
              <div className="flex justify-between items-center border-b border-red-100 pb-2">
                <span className="text-gray-600">Okres spłaty:</span>
                <span className="font-semibold text-gray-900">{loanYears} lat</span>
              </div>
              <div className="flex justify-between items-center border-b border-red-100 pb-2">
                <span className="text-gray-600">Oprocentowanie:</span>
                <span className="font-semibold text-gray-900">Stopa + {bankMargin}% marży</span>
              </div>
              <div className="pt-4 mt-2">
                <span className="block text-gray-500 mb-1 text-xs uppercase font-bold tracking-wider">Twoja Miesięczna Rata</span>
                <span className="text-4xl font-black text-red-600 tracking-tight">{monthlyPayment.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} <span className="text-xl font-bold">PLN</span></span>
              </div>
            </div>
          </div>

          <div className="border-2 border-green-100 rounded-2xl p-6 bg-gradient-to-b from-green-50 to-white shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <ArrowDownRight className="w-32 h-32" />
            </div>
            <h4 className="font-bold text-green-700 flex items-center gap-2 mb-6 text-lg relative z-10">
              <span className="bg-green-100 p-2 rounded-lg"><ArrowDownRight className="h-5 w-5" /></span>
              Lokata Roczna
            </h4>
            <div className="space-y-4 text-sm relative z-10">
              <div className="flex justify-between items-center border-b border-green-100 pb-2">
                <span className="text-gray-600">Zdeponowany kapitał:</span>
                <span className="font-semibold text-gray-900">{depositAmount.toLocaleString('pl-PL')} PLN</span>
              </div>
              <div className="flex justify-between items-center border-b border-green-100 pb-2">
                <span className="text-gray-600">Oprocentowanie:</span>
                <span className="font-semibold text-gray-900">{Math.max(0, baseRate - depositBankFee).toFixed(2)}%</span>
              </div>
              <div className="flex justify-between items-center border-b border-green-100 pb-2">
                <span className="text-gray-600">Podatek Belki:</span>
                <span className="font-semibold text-gray-900 text-red-500">-19%</span>
              </div>
              <div className="pt-4 mt-2">
                <span className="block text-gray-500 mb-1 text-xs uppercase font-bold tracking-wider">Czysty Zysk po roku</span>
                <span className="text-4xl font-black text-green-600 tracking-tight">+{annualProfitAfterTax.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} <span className="text-xl font-bold">PLN</span></span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
