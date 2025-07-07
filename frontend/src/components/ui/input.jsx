import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs transition-all outline-none",
        "bg-white text-gray-800 border-[#d1fae5] placeholder:text-gray-400",
        "focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "file:text-gray-700 file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Input }
