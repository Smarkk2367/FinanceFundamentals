export function Footer() {
    return (
        <footer className="border-t bg-brand-navy-light text-white/80 py-8 md:py-12">
            <div className="container px-4 md:px-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-white">Hub Wiedzy Finansowej</p>
                    <p className="text-sm">VI edycja Złotych Szkół NBP</p>
                </div>
                <p className="text-sm text-center md:text-right">
                    Wiedza podstawą mądrych decyzji.
                </p>
            </div>
        </footer>
    )
}
