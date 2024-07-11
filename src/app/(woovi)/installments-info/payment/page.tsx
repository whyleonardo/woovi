import { InstallmentsInfo } from "@/components/installments"
import { MotionWrapper } from "@/components/motion-wrapper"

import { PaymentTerm } from "../_components/payment-term"
import { PageHeading } from "./_components/page-heading"
import { PaymentForm } from "./_components/payment-form"

export default function PaymentPage() {
  return (
    <MotionWrapper className="flex flex-col items-center text-center">
      <PageHeading />

      <PaymentForm className="mt-4" />

      <PaymentTerm />

      <InstallmentsInfo />
    </MotionWrapper>
  )
}
