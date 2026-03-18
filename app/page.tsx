import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { ArrowRight, TrendingUp, PiggyBank, Landmark, Percent, Target, Globe, Wallet, Scale, BarChart3, Tag, CreditCard, Building, Clock } from "lucide-react";

export default function Home() {
  const featuredTopics = [
    {
      title: "Inflacja i jej skutki",
      description: "Dowiedz się, czym jest inflacja, jak wpływa na Twoje oszczędności i gospodarkę.",
      icon: <TrendingUp className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/inflation"
    },
    {
      title: "Popyt i Podaż",
      description: "Zrozum podstawowe siły rynkowe, które kształtują ceny towarów i usług wokół nas.",
      icon: <Landmark className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/supply-demand"
    },
    {
      title: "Stopy Procentowe",
      description: "Jak decyzje banku centralnego wpływają na raty Twojego kredytu i zyski z lokat.",
      icon: <Percent className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/interest-rates"
    },
    {
      title: "Rezerwy dewizowe",
      description: "Czym są rezerwy dewizowe i do czego służą państwu?",
      icon: <Globe className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/foreign-reserves"
    },
    {
      title: "Budżet",
      description: "Podstawowe zasady tworzenia budżetu domowego i państwowego.",
      icon: <Wallet className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/budget"
    },
    {
      title: "Koszt stały i zmienny",
      description: "Zrozum różnice w rodzajach kosztów w życiu i biznesie.",
      icon: <Scale className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/fixed-variable-costs"
    },
    {
      title: "Procent prosty i składany",
      description: "Jak darmowe pieniądze robią kolejne darmowe pieniądze.",
      icon: <BarChart3 className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/simple-compound-interest"
    },
    {
      title: "Cena a wartość",
      description: "Różnica pomiędzy tym, ile płacisz, a tym co zyskujesz.",
      icon: <Tag className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/price-vs-value"
    },
    {
      title: "Lokata bankowa",
      description: "Podstawowe narzędzie do oszczędzania pieniędzy w banku.",
      icon: <Building className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/bank-deposit"
    },
    {
      title: "Płatność odroczona",
      description: "Kup teraz, zapłać później – plusy i haczyki mechanizmu BNPL.",
      icon: <Clock className="h-10 w-10 text-brand-gold mb-4" />,
      href: "/topics/deferred-payment"
    },
    {
      title: "Podsumowanie i Quiz",
      description: "Sprawdź swoją wiedzę zdobytą podczas warsztatów w krótkim quizie.",
      icon: <Target className="h-10 w-10 text-brand-navy-light mb-4" />,
      href: "/quiz"
    }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="w-full bg-brand-navy py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-brand-navy-light blur-3xl opacity-50"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white max-w-4xl">
                Rozumienie Podstawowych <span className="text-brand-gold">Pojęć Ekonomicznych</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
                Zdobądź praktyczną wiedzę finansową niezbędną w codziennym życiu.
                Projekt zrealizowany na potrzeby warsztatów dla uczniów.
              </p>
            </div>
            <div className="space-x-4 mt-8 flex flex-col sm:flex-row gap-4 sm:gap-0">
              <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
                <Link href="/#modules">
                  Rozpocznij Naukę <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white">
                <Link href="/calculator">
                  Kalkulator Oszczędności
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*Topics*/}
      <section id="modules" className="w-full py-16 md:py-24 bg-background scroll-mt-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-navy">Wszystkie Zagadnienia</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Wybierz moduł, aby przejść do materiałów edukacyjnych z warsztatów. 
                  Zalecamy przechodzenie przez zagadnienia po kolei.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTopics.map((topic, index) => (
              <Card key={index} className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 border-gray-200">
                <CardHeader>
                  <div>{topic.icon}</div>
                  <CardTitle className="text-2xl">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base text-gray-600">
                    {topic.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant={index === featuredTopics.length - 1 ? "default" : "outline"} className="w-full justify-between group">
                    <Link href={topic.href}>
                      {index === featuredTopics.length - 1 ? "Rozwiąż Quiz" : "Wybierz moduł"}
                      <ArrowRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
