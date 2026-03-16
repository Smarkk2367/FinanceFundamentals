import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, TrendingUp, PiggyBank, Landmark, Percent, Target } from "lucide-react";

export default function TopicsPage() {
    const topics = [
        {
            title: "Inflacja i jej skutki",
            description: "Czym jest inflacja, jak wpływa na nasze oszczędności i siłę nabywczą pieniądza.",
            icon: <TrendingUp className="h-8 w-8 text-brand-gold mb-4" />,
            href: "/topics/inflation"
        },
        {
            title: "Oszczędzanie i Inwestowanie",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: <PiggyBank className="h-8 w-8 text-brand-gold mb-4" />,
            href: "/topics/savings"
        },
        {
            title: "Popyt i Podaż",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            icon: <Landmark className="h-8 w-8 text-brand-gold mb-4" />,
            href: "/topics/supply-demand"
        },
        {
            title: "Stopy Procentowe",
            description: "Czym są i kto je ustala?",
            icon: <Percent className="h-8 w-8 text-brand-gold mb-4" />,
            href: "/topics/interest-rates"
        },
        {
            title: "Podsumowanie i Quiz",
            description: "Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.",
            icon: <Target className="h-8 w-8 text-brand-navy-light mb-4" />,
            href: "/quiz"
        }
    ];

    return (
        <div className="container px-4 md:px-6 py-12 md:py-24 mx-auto max-w-6xl">
            <div className="flex flex-col items-start gap-4 md:gap-8 mb-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Wszystkie Zagadnienia</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                    Wybierz moduł, aby przejść do materiałów edukacyjnych z warsztatów.
                    Zalecamy przechodzenie przez zagadnienia po kolei.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {topics.map((topic, index) => (
                    <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div>{topic.icon}</div>
                            <CardTitle>{topic.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <CardDescription className="text-sm text-gray-600">
                                {topic.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant={index === topics.length - 1 ? "default" : "outline"} className="w-full justify-between group">
                                <Link href={topic.href}>
                                    Wybierz moduł
                                    <ArrowRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
