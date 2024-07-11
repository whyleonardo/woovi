import Image from "next/image"

import { MotionWrapper } from "@/components/motion-wrapper"

import { CopyQRCodeButton } from "./_components/copy-qrcode-button"
import { InstallmentsInfo } from "./_components/installments-info"
import { InstallmentsOptionNextStep } from "./_components/installments-option-next-step"
import { PageHeading } from "./_components/page-heading"
import { PaymentTerm } from "./_components/payment-term"

export default function PixCreditCardPage() {
  return (
    <MotionWrapper className="flex flex-col items-center text-center">
      <PageHeading />

      <Image
        src="/imgs/qr-code.png"
        alt="QR Code"
        className="mt-8 aspect-square rounded-md ring-2 ring-woovi-green ring-offset-4"
        width={330}
        height={330}
      />

      <CopyQRCodeButton />

      <PaymentTerm />

      <InstallmentsInfo />

      <InstallmentsOptionNextStep />
    </MotionWrapper>
  )
}
