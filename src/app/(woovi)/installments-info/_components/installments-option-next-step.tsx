"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import { usePaymentMethod } from "@/stores/use-payments"
import useStore from "@/stores/use-store"

export const InstallmentsOptionNextStep = () => {
  const paymentMethodStore = useStore(usePaymentMethod, (state) => state)

  const type = paymentMethodStore?.paymentMethod?.type as string

  if (type === "pix") {
    return null
  }

  return (
    <Link
      href="/installments-info/payment"
      className={buttonVariants({
        variant: "woovi",
        size: "woovi",
        className: "mt-4 w-full md:max-w-lg"
      })}
    >
      Ir para o pagamento
    </Link>
  )
}
