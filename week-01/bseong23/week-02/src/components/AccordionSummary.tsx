import { ChevronDown } from "lucide-react"
import type { AccordionSummaryProps } from "./types"

export function AccordionSummary({
  children,
  isExpanded,
  onClick,
}: AccordionSummaryProps) {
  return (
    <button
      className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
      onClick={onClick}
    >
      {children}
      <ChevronDown
        className={`w-5 h-5 transition-transform duration-200
          ${isExpanded ? "rotate-180" : ""}`}
      />
    </button>
  )
}
