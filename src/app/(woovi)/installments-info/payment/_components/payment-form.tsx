"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

import { cn } from "@/lib/utils"

import { usePaymentMethod } from "@/stores/use-payments"
import useStore from "@/stores/use-store"
import { formatCpf } from "@/utils/format-cpf"
import { formatCreditCard } from "@/utils/format-credit-card"
import { formatCreditCardExpiration } from "@/utils/format-credit-card-expiration"
import { formatCurrency } from "@/utils/format-currency"

import { zodResolver } from "@hookform/resolvers/zod"

import * as z from "zod"

const paymentFormSchema = z.object({
  full_name: z.string().min(2, { message: "Insira seu nome completo." }),
  cpf: z
    .string({
      required_error: "CPF é obrigatório."
    })
    .min(14, { message: "Insira um CPF válido." })
    .refine((doc) => {
      console.log(doc)
      const replacedDoc = doc.replace(/\D/g, "")
      return !!Number(replacedDoc)
    }, "CPF deve conter apenas números."),
  credit_card_number: z
    .string({
      required_error: "Insira um cartão."
    })
    .refine((creditCardNumber) => {
      const replacedCreditCardNumber = creditCardNumber.replace(/\D/g, "")
      console.log(replacedCreditCardNumber)
      return replacedCreditCardNumber.length === 16
    }, "Insira um cartão válido")
    .refine((cardNumber) => {
      const replacedDoc = cardNumber.replace(/\D/g, "")
      return !!Number(replacedDoc)
    }, "CPF deve conter apenas números."),
  credit_card_expiration: z
    .string()
    .min(5, { message: "Insira uma data válida." }),
  credit_card_cvv: z.string().min(3, { message: "Insira um CVV válido." }),
  installments_quantity: z
    .string()
    .min(1)
    .refine((value) => {
      const quantity = value.replace("quantity-", "")
      return Number(quantity) > 0
    }, "Por favor, selecione uma quantidade de parcelas.")
})

interface PaymentFormProps {
  className?: string
}

type paymentFormSchemaType = z.infer<typeof paymentFormSchema>

export const PaymentForm = ({ className }: PaymentFormProps) => {
  const [cpfValue, setCpfValue] = useState("")
  const [creditCardValue, setCreditCardValue] = useState("")
  const [creditCardExpirationValue, setCreditCardExpirationValue] = useState("")

  const { toast } = useToast()
  const router = useRouter()

  const paymentMethodStore = useStore(usePaymentMethod, (state) => state)

  const installmentsQuantity = paymentMethodStore?.paymentMethod
    ?.quantity as number
  const installmentValue = paymentMethodStore?.paymentMethod?.value as number

  const form = useForm<paymentFormSchemaType>({
    resolver: zodResolver(paymentFormSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      full_name: "",
      cpf: "",
      credit_card_number: "",
      credit_card_expiration: "",
      credit_card_cvv: "",
      installments_quantity: `quantity-${installmentsQuantity}`
    }
  })

  const onSubmit = () => {
    toast({
      title: "Pagamento enviado com sucesso",
      description: "Obrigado por escolher a Woovi!"
    })

    router.push("/")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("mb-4 flex w-full flex-col gap-7", className)}
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.full_name && "border-destructive"
                  )}
                  label="Nome Completo"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className={cn(
                    form.formState.errors.cpf && "border-destructive"
                  )}
                  label="CPF"
                  onChange={({ target }) => {
                    setCpfValue(formatCpf(target.value))
                    form.setValue("cpf", formatCpf(target.value))
                    target.value = formatCpf(target.value)
                  }}
                  value={cpfValue}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="credit_card_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.credit_card_number &&
                      "border-destructive"
                  )}
                  {...field}
                  label="Número do cartão"
                  onChange={({ target }) => {
                    setCreditCardValue(formatCreditCard(target.value))
                    form.setValue(
                      "credit_card_number",
                      formatCreditCard(target.value)
                    )
                    target.value = formatCreditCard(target.value)
                  }}
                  value={creditCardValue}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-center gap-5">
          <FormField
            control={form.control}
            name="credit_card_expiration"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      form.formState.errors.credit_card_expiration &&
                        "border-destructive"
                    )}
                    label="Vencimento"
                    onChange={({ target }) => {
                      setCreditCardExpirationValue(
                        formatCreditCardExpiration(target.value)
                      )
                      form.setValue(
                        "credit_card_expiration",
                        formatCreditCardExpiration(target.value)
                      )
                      target.value = formatCreditCardExpiration(target.value)
                    }}
                    value={creditCardExpirationValue}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="credit_card_cvv"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={cn(
                      form.formState.errors.credit_card_cvv &&
                        "border-destructive"
                    )}
                    label="CVV"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="installments_quantity"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="text-lg font-semibold">
                    <SelectValue placeholder="Selecione a quantidade de parcelas" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem
                    className="text-lg font-semibold"
                    value={`quantity-${installmentsQuantity}`}
                  >
                    {installmentsQuantity}x de{" "}
                    {formatCurrency(installmentValue)}
                  </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="woovi" size="woovi" type="submit">
          Pagar
        </Button>
      </form>
    </Form>
  )
}
