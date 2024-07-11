"use client"

import { mockedData } from "@/data/mock"
import { usePaymentMethod } from "@/stores/use-payments"
import useStore from "@/stores/use-store"
import { formatCurrency } from "@/utils/format-currency"

export const PageHeading = () => {
  const paymentMethodStore = useStore(usePaymentMethod, (state) => state)

  const paymentType = paymentMethodStore?.paymentMethod?.type

  if (paymentType === "pix") {
    return (
      <strong className="block text-balance text-2xl font-extrabold text-woovi-dark-gray">
        {mockedData.username}, pague{" "}
        {formatCurrency(paymentMethodStore?.paymentMethod?.value as number)}
        &nbsp;pelo Pix
      </strong>
    )
  }

  return (
    <strong className="block text-2xl font-extrabold text-woovi-dark-gray">
      {mockedData.username}, pague a entrada de &nbsp;
      {formatCurrency(paymentMethodStore?.paymentMethod?.value as number)}
      &nbsp;pelo Pix
    </strong>
  )
}
