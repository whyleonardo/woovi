import { InstallmentsInfo } from "@/components/installments"
import { MotionWrapper } from "@/components/motion-wrapper"

import { PaymentTerm } from "../_components/payment-term"
import { PageHeading } from "./_components/page-heading"
import { PaymentForm } from "./_components/payment-form"

export default function PaymentPage() {
  return (
    <MotionWrapper className="flex flex-col items-center text-center md:mt-4 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-8">
      <div className="flex w-full flex-col items-center justify-between lg:col-span-1">
        <div className="lg:max-w-sm">
          <PageHeading />
        </div>

        <PaymentForm className="mt-4 max-w-md" />
        <PaymentTerm />
      </div>

      <div className="size-full lg:max-w-md xl:max-w-lg 2xl:max-w-3xl">
        <InstallmentsInfo />
      </div>
    </MotionWrapper>
  )
}
