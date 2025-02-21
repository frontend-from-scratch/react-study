import React from "react"
import type { AccordionItemProps } from "./types"

export function AccordionItem({
  children,
  isExpanded,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="w-full">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null

        return React.cloneElement(child, {
          ...child.props,
          isExpanded,
          onClick: onToggle,
        })
      })}
    </div>
  )
}
