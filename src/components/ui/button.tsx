import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../styles/cn";

type ButtonProps = {
    variant?: "primary" | "secondary" | "ghost";
    width?: "fit" | "full";
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ width = "fit", variant = "primary", children, ...props }: ButtonProps) {
    return (
        <button
            className={cn(props.className)}
        >
            {children}
        </button>
    )
}