import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "outline" | "ghost" | "gold"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        //Base classes
        let baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50"

        //Variant classes
        let variantClasses = ""
        switch (variant) {
            case "default":
                variantClasses = "bg-brand-navy text-white hover:bg-brand-navy-light shadow-sm"
                break
            case "gold":
                variantClasses = "bg-brand-gold text-brand-navy hover:bg-brand-gold-light shadow-sm font-semibold"
                break
            case "outline":
                variantClasses = "border border-brand-navy bg-transparent hover:bg-brand-navy/5 text-brand-navy"
                break
            case "ghost":
                variantClasses = "hover:bg-brand-navy/5 hover:text-brand-navy text-brand-navy"
                break
        }

        //Size classes
        let sizeClasses = ""
        switch (size) {
            case "default":
                sizeClasses = "h-9 px-4 py-2"
                break
            case "sm":
                sizeClasses = "h-8 rounded-md px-3 text-xs"
                break
            case "lg":
                sizeClasses = "h-10 rounded-md px-8"
                break
            case "icon":
                sizeClasses = "h-9 w-9"
                break
        }

        const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim()

        return (
            <Comp
                className={combinedClasses}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
