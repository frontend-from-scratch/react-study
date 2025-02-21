import { PropsWithChildren } from "react"

export interface AccordionProps extends PropsWithChildren {
  multiple?: boolean
}

export interface AccordionItemProps extends PropsWithChildren {
  id: string
  isExpanded?: boolean
  onToggle?: () => void
}

export interface AccordionSummaryProps extends PropsWithChildren {
  isExpanded?: boolean
  onClick?: () => void
}

export interface AccordionDetailsProps extends PropsWithChildren {
  isExpanded?: boolean
}
