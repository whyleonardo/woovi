import Link from "next/link"

import { MotionWrapper } from "@/components/motion-wrapper"
import { PaymentOption, PaymentRoot } from "@/components/payment"
import { buttonVariants } from "@/components/ui/button"

import { mockedData } from "@/data/mock"

export default function PaymentOptionsPage() {
  return (
    <MotionWrapper className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8">
      <strong className="text-balance text-2xl font-extrabold text-woovi-dark-gray">
        {mockedData.username}, como você quer pagar?
      </strong>

      <PaymentRoot>
        <div className="flex w-full justify-center">
          {mockedData["pix"].installments.map((item, index) => (
            <PaymentOption
              key={item.value}
              index={index}
              type="pix"
              identifier_code={mockedData["pix"].identifier_code}
              cet={item.cet}
              quantity={item.quantity}
              value={item.value}
              total={item.total}
              banner_highlight={item.banner_highlight}
            />
          ))}
        </div>

        <div className="relative z-50 flex flex-col gap-0.5 rounded-md bg-woovi-light-gray p-0.5 lg:grid lg:grid-cols-2 lg:grid-rows-1">
          {mockedData["pix_parcelado"].installments.map((item, index) => (
            <PaymentOption
              key={item.value}
              index={index}
              identifier_code={mockedData["pix"].identifier_code}
              type="pix_parcelado"
              quantity={item.quantity}
              cet={item.cet}
              value={item.value}
              total={item.total}
              banner_highlight={item.banner_highlight}
            />
          ))}
        </div>
      </PaymentRoot>

      <Link
        href="/installments-info"
        className={buttonVariants({
          className: "mt-8 w-full sm:max-w-md lg:max-w-lg",
          variant: "woovi",
          size: "woovi"
        })}
      >
        Pagar com Pix
      </Link>
    </MotionWrapper>
  )
}
