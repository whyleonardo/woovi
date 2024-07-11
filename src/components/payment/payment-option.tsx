"use client"

import { RadioGroupItem } from "@/components/ui/radio-group"

import { cn } from "@/lib/utils"

import { PaymentType } from "@/data/mock"
import { usePaymentMethod } from "@/stores/use-payments"
import useStore from "@/stores/use-store"
import { formatCurrency } from "@/utils/format-currency"

import { FlagBanner } from "../flag-banner"

interface PaymentOptionProps {
  type: PaymentType
  quantity: number
  index: number
  value: number
  identifier_code: string
  total: number
  cet: number
  banner_highlight?: string
  className?: string
}

const PAYMENT_OPTIONS = {
  pix: "Pix",
  pix_parcelado: "Pix Parcelado"
} as const

export const PaymentOption = ({
  quantity,
  total,
  identifier_code,
  index,
  type,
  cet,
  banner_highlight,
  className,
  value
}: PaymentOptionProps) => {
  const paymentMethodStore = useStore(usePaymentMethod, (state) => state)

  return (
    <label
      className={cn(
        "relative z-50 flex min-h-24 items-center bg-white p-4",
        "first-of-type:rounded-t-md last-of-type:rounded-b-md",
        "has-[button[data-state='checked']]:bg-woovi-green-foreground",
        "has-[button[data-state='checked']]:ring-woovi-green",
        "has-[button[data-state='checked']]:ring-2",
        type === "pix" &&
          "mb-8 border-2 has-[button[data-state='checked']]:border-transparent",
        className
      )}
      htmlFor={`installment-${quantity}`}
    >
      {index === 0 && (
        <div className="absolute -top-3.5 left-4 rounded-full bg-woovi-light-gray px-5 text-lg font-extrabold leading-6 text-woovi-dark-gray">
          {PAYMENT_OPTIONS[type]}
        </div>
      )}

      <div className="flex w-full flex-col">
        <div className="w-full">
          <span className="text-2xl font-extrabold">{quantity}x </span>
          <span className="text-2xl font-semibold text-woovi-dark-gray">
            {formatCurrency(value)}
          </span>
        </div>
        {type === "pix" && (
          <span className="font-semibold text-woovi-green">
            Ganhe <strong className="extrabold">3%</strong> de Cashback
          </span>
        )}
        {type === "pix_parcelado" && (
          <div>
            <span className="text-base font-semibold text-woovi-muted">
              Total: {formatCurrency(total)}
            </span>
          </div>
        )}

        {banner_highlight && (
          <FlagBanner>
            <strong>{banner_highlight}</strong>
          </FlagBanner>
        )}
      </div>

      <div className="mt-3 self-start">
        <RadioGroupItem
          onClick={() =>
            paymentMethodStore?.setPaymentMethod({
              type,
              quantity,
              cet,
              value,
              total,
              identifier_code
            })
          }
          className="size-6 min-h-6 min-w-6"
          value={`installment-${quantity}`}
          id={`installment-${quantity}`}
        />
      </div>
    </label>
  )
}
