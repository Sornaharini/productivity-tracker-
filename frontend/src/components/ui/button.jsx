import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[#10b981] text-white hover:bg-[#0f766e] focus-visible:ring-[#10b981]",
        destructive:
          "bg-[#f87171] text-white hover:bg-[#ef4444] focus-visible:ring-[#f87171]",
        outline:
          "border border-[#10b981] text-[#10b981] bg-transparent hover:bg-[#ecfdf5] focus-visible:ring-[#10b981]",
        secondary:
          "bg-[#14b8a6] text-white hover:bg-[#0e9c94] focus-visible:ring-[#14b8a6]",
        ghost:
          "text-[#10b981] hover:bg-[#f0fdf4] focus-visible:ring-[#10b981]",
        link:
          "text-[#10b981] underline underline-offset-4 hover:text-[#0f766e]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
