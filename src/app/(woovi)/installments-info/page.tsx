import Image from "next/image"
import { Fragment } from "react"

import { InstallmentsInfo } from "@/components/installments"
import { MotionWrapper } from "@/components/motion-wrapper"

import { CopyQRCodeButton } from "./_components/copy-qrcode-button"
import { InstallmentsOptionNextStep } from "./_components/installments-option-next-step"
import { PageHeading } from "./_components/page-heading"
import { PaymentTerm } from "./_components/payment-term"

export default function PixCreditCardPage() {
  return (
    <MotionWrapper className="flex flex-col items-center text-center md:mt-4 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-8">
      <div className="flex w-full flex-col items-center justify-between lg:col-span-1">
        <div className="lg:max-w-sm">
          <PageHeading />
        </div>

        <Image
          src="/imgs/qr-code.png"
          alt="QR Code"
          className="mt-8 aspect-square rounded-md ring-2 ring-woovi-green ring-offset-4"
          width={330}
          height={330}
        />

        <div className="justify-center md:mt-8 md:flex md:flex-col-reverse md:gap-4">
          <CopyQRCodeButton />
          <PaymentTerm />
        </div>
      </div>

      <div className="col-span-1 flex size-full w-full flex-col items-center justify-between lg:max-w-md xl:max-w-lg 2xl:max-w-3xl">
        <InstallmentsInfo />

        <InstallmentsOptionNextStep />
      </div>
    </MotionWrapper>
  )
}
