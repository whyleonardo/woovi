"use client"

import { mockedData } from "@/data/mock"
import { usePaymentMethod } from "@/stores/use-payments"
import useStore from "@/stores/use-store"
import { formatCurrency } from "@/utils/format-currency"

export const PageHeading = () => {
  const paymentMethodStore = useStore(usePaymentMethod, (state) => state)

  const quantity = paymentMethodStore?.paymentMethod?.quantity as number

  return (
    <strong className="block text-balance text-2xl font-extrabold text-woovi-dark-gray">
      {mockedData.username}, pague o restante em {quantity - 1}x no cartão
    </strong>
  )
}
