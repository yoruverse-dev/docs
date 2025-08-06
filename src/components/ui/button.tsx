import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../styles/cn";

export type ButtonProps = {
    variant?: "primary" | "secondary" | "tertiary" | "danger"
    disabled?: boolean
    onlyIcon?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
    variant = "primary",
    disabled,
    onlyIcon,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                className,
                "flex items-center gap-2.5 px-5 py-2.5",
                "transition-colors rounded-xl text-sm leading-sm font-semibold cursor-pointer",
                onlyIcon && "px-2.5 py-2.5",
                variant === "primary" && [
                    "shadow-sm",
                    disabled ?
                        "bg-disabled outline outline-disabled text-disabled cursor-not-allowed" :
                        "bg-brand-solid hover:bg-brand-solid-hover text-primary-on-brand"
                ],
                variant === "secondary" && [
                    "shadow-sm",
                    disabled ?
                        "bg-primary outline outline-disabled text-disabled cursor-not-allowed" :
                        "bg-primary hover:bg-primary-hover text-secondary hover:text-secondary-hover outline outline-primary"
                ],
                variant === "tertiary" && [
                    disabled ?
                        "bg-primary text-disabled cursor-not-allowed" :
                        "bg-primary hover:bg-primary-hover text-secondary hover:text-secondary-hover"
                ],
                variant === "danger" && [
                    "shadow-sm",
                    disabled ?
                        "bg-primary outline outline-disabled text-disabled cursor-not-allowed" :
                        "bg-primary hover:bg-primary-hover text-error-primary outline outline-error-subtle"
                ]
            )}
            {...props}
        >
            {children}
        </button>
    )
}