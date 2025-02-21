import React, { useState } from "react"
import type { AccordionProps } from "./types"

export function Accordion({ children, multiple = true }: AccordionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (multiple) {
        prev.has(id) ? newSet.delete(id) : newSet.add(id)
      } else {
        newSet.clear()
        if (!prev.has(id)) newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="w-full border rounded-lg divide-y">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null

        // id prop이 있는지 확인
        const id = child.props.id
        if (!id) return child

        return React.cloneElement(child, {
          ...child.props,
          isExpanded: expandedItems.has(id),
          onToggle: () => toggleItem(id),
        })
      })}
    </div>
  )
}
