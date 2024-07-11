import Link from "next/link"

import { MotionWrapper } from "@/components/motion-wrapper"
import { PaymentOption, PaymentRoot } from "@/components/payment"

import { mockedData } from "@/data/mock"

export default function PaymentOptionsPage() {
  return (
    <MotionWrapper className="flex flex-col items-center gap-8">
      <strong className="text-balanc text-2xl font-extrabold text-woovi-dark-gray">
        {mockedData.username}, como você quer pagar?
      </strong>

      <PaymentRoot>
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

        <div className="relative z-50 flex flex-col gap-0.5 rounded-md bg-woovi-light-gray p-0.5">
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

      <Link href="/installments-info" className="mt-8">
        PIX
      </Link>
    </MotionWrapper>
  )
}
