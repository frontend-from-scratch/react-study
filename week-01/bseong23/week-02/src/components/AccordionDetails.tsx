import type { AccordionDetailsProps } from "./types"

export function AccordionDetails({
  children,
  isExpanded,
}: AccordionDetailsProps) {
  return (
    <div
      className={`
        grid transition-all duration-200 ease-in-out
        ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }
      `}
    >
      <div className="overflow-hidden">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
