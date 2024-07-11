import { PaymentMethod } from "@/data/mock"

import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface usePaymentMethodProps {
  paymentMethod: PaymentMethod
  setPaymentMethod: (paymentMethod: PaymentMethod) => void
}

export const usePaymentMethod = create<usePaymentMethodProps>()(
  persist(
    (set) => ({
      paymentMethod: null,
      setPaymentMethod: (paymentMethod) => set({ paymentMethod })
    }),
    {
      name: "paymentMethod-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
)
