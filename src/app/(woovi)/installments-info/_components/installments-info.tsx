"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

import { cn } from "@/lib/utils"

import { usePaymentMethod } from "@/stores/use-payments"
import useStore from "@/stores/use-store"
import { formatCurrency } from "@/utils/format-currency"

export const InstallmentsInfo = () => {
  const paymentMethodStore = useStore(usePaymentMethod, (state) => state)

  const quantity = paymentMethodStore?.paymentMethod?.quantity as number
  const value = paymentMethodStore?.paymentMethod?.value as number
  const cet = paymentMethodStore?.paymentMethod?.cet as number
  const total = paymentMethodStore?.paymentMethod?.total as number
  const identifierCode = paymentMethodStore?.paymentMethod
    ?.identifier_code as string

  return (
    <div className="mt-4 flex w-full flex-col">
      <div className="flex w-full flex-col gap-4">
        {Array.from({ length: quantity }, (_, index) => (
          <div className="group flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "relative size-4 rounded-full border-2 bg-white",
                  index === 0 && "border-woovi-green"
                )}
              >
                <div className="absolute inset-x-1/2 -bottom-8 -z-10 h-10 w-0.5 -translate-x-1/2 bg-woovi-light-gray group-last-of-type:hidden" />
              </div>

              <span className="text-lg font-semibold text-woovi-dark-gray">
                {index + 1}ª {index === 0 ? "entrada no pix" : "no cartão"}
              </span>
            </div>

            <strong className="text-lg font-extrabold text-woovi-dark-gray">
              {formatCurrency(value)}
            </strong>
          </div>
        ))}
      </div>

      <Separator className="mt-4 h-0.5 w-full bg-woovi-light-gray" />

      <div className="mt-4 flex w-full items-center justify-between">
        <span className="text-sm font-semibold text-woovi-dark-gray">
          CET: {cet}%
        </span>

        <span className="text-lg font-semibold text-woovi-dark-gray">
          Total: {formatCurrency(total)}
        </span>
      </div>

      <Separator className="mt-4 h-0.5 w-full bg-woovi-light-gray" />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base font-extrabold text-woovi-dark-gray !no-underline">
            Como funciona?
          </AccordionTrigger>
          <AccordionContent className="text-start font-semibold text-woovi-dark-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            dolor saepe architecto provident. Iste alias animi repellendus ut
            unde, incidunt officia voluptates quos amet quisquam architecto
            dolorum debitis harum tenetur.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-4">
        <span className="block text-sm font-semibold text-woovi-muted-gray">
          Identificador:
        </span>

        <span className="block text-sm font-extrabold text-woovi-dark-gray">
          {identifierCode}
        </span>
      </div>
    </div>
  )
}
