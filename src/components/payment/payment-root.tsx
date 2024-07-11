import { ReactNode } from "react"

import { RadioGroup } from "@/components/ui/radio-group"

interface PaymentRootProps {
  children: ReactNode
}

export const PaymentRoot = ({ children }: PaymentRootProps) => {
  return (
    <div className="flex flex-col">
      <RadioGroup defaultValue="installment-1" className="gap-0">
        {children}
      </RadioGroup>
    </div>
  )
}
