"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "Co nazywamy procesem wzrostu ogólnego poziomu cen w gospodarce?",
        options: ["Deflacja", "Inflacja", "Stagflacja", "Dewaluacja"],
        correctAnswer: 1,
    },
    {
        id: 2,
        question: "Która z wymienionych instytucji decyduje o wysokości podstawowych stóp procentowych w Polsce?",
        options: ["Ministerstwo Finansów", "Giełda Papierów Wartościowych", "Narodowy Bank Polski (NBP)", "Główny Urząd Statystyczny"],
        correctAnswer: 2,
    },
    {
        id: 3,
        question: "Co opisuje prawo popytu?",
        options: [
            "Wraz ze wzrostem ceny spada ilość dóbr, jaką konsumenci chcą kupić.",
            "Wraz z wyższą ceną producenci chcą wyprodukować więcej dóbr.",
            "Ceny wszystkich aktywów w długim terminie rosną.",
            "Inflacja to zawsze i wszędzie zjawisko pieniężne."
        ],
        correctAnswer: 0,
    },
    {
        id: 4,
        question: "Jaki jest główny cel budowania tak zwanej 'poduszki finansowej'?",
        options: [
            "Inwestowanie na giełdzie dla szybkiego zysku",
            "Kupno najnowszego modelu smartfona",
            "Zabezpieczenie przed niespodziewanymi wydatkami / utratą pracy",
            "Spekulacja na rynku kryptowalut"
        ],
        correctAnswer: 2,
    }
];

export default function QuizPage() {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleOptionSelect = (optionIdx: number) => {
        setSelectedOption(optionIdx);
    };

    const handleNext = () => {
        if (selectedOption === null) return;

        if (selectedOption === QUIZ_QUESTIONS[currentQuestionIdx].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestionIdx(currentQuestionIdx + 1);
            setSelectedOption(null);
        } else {
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIdx(0);
        setSelectedOption(null);
        setScore(0);
        setShowResults(false);
    };

    if (showResults) {
        return (
            <div className="container px-4 md:px-6 py-12 md:py-24 mx-auto max-w-2xl text-center">
                <Card className="p-8">
                    <CardHeader>
                        <CardTitle className="text-3xl text-brand-navy">Wynik Quizu</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-6xl font-extrabold text-brand-gold">
                            {score} / {QUIZ_QUESTIONS.length}
                        </p>
                        <p className="text-xl text-gray-600">
                            {score === QUIZ_QUESTIONS.length
                                ? "Doskonale! Jesteś prawdziwym ekspertem od ekonomii."
                                : score >= QUIZ_QUESTIONS.length / 2
                                    ? "Dobry wynik! Posiadasz solidne podstawy."
                                    : "Czas na powtórkę materiałów dostępnych w naszym hubie!"}
                        </p>
                    </CardContent>
                    <CardFooter className="flex justify-center mt-8">
                        <Button onClick={restartQuiz} variant="outline" size="lg">
                            Spróbuj ponownie
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    const currentQuestion = QUIZ_QUESTIONS[currentQuestionIdx];

    return (
        <div className="container px-4 md:px-6 py-12 md:py-24 mx-auto max-w-2xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-navy">
                    Sprawdź swoją wiedzę
                </h1>
                <p className="text-gray-500 mt-2">
                    Pytanie {currentQuestionIdx + 1} z {QUIZ_QUESTIONS.length}
                </p>
                <div className="w-full bg-gray-200 h-2 mt-4 rounded-full overflow-hidden">
                    <div
                        className="bg-brand-gold h-full transition-all duration-300"
                        style={{ width: `${((currentQuestionIdx) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                </div>
            </div>

            <Card className="border-gray-200 shadow-md">
                <CardHeader>
                    <CardTitle className="text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {currentQuestion.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleOptionSelect(idx)}
                            className={`w-full text-left p-4 rounded-lg border transition-all ${selectedOption === idx
                                ? "border-brand-navy bg-brand-navy text-white"
                                : "border-gray-200 hover:border-brand-gold hover:bg-brand-gold/5"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </CardContent>
                <CardFooter className="pt-6">
                    <Button
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        variant="gold"
                        className="w-full md:w-auto ml-auto"
                    >
                        {currentQuestionIdx === QUIZ_QUESTIONS.length - 1 ? "Zakończ Quiz" : "Dalej"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
