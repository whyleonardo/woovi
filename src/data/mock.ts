export type PaymentType = "pix" | "pix_parcelado"

export type PaymentMethod = {
  type: PaymentType
  identifier_code: string
  quantity: number
  value: number
  cet: number
  total: number
  banner_highlight?: string
} | null

export const mockedData = {
  username: "João",
  pix: {
    type: "pix" as PaymentType,
    identifier_code: "2c1b951f356c4680b13ba1c9fc889c47",
    installments: [
      {
        quantity: 1,
        value: 30500,
        cet: 0,
        total: 30500,
        banner_highlight: "🤑 R$ 300,00 de volta no seu Pix na hora"
      }
    ]
  },
  pix_parcelado: {
    type: "pix_parcelado" as PaymentType,
    identifier_code: "2c1b951f356c4680b13ba1c9fc889c47",
    installments: [
      { quantity: 2, value: 15300, cet: 0.5, total: 30600 },
      { quantity: 3, value: 10196.66, cet: 0.5, total: 30620.0 },
      {
        quantity: 4,
        value: 7725.0,
        cet: 0.5,
        banner_highlight: "-3% de juros: Melhor opção de parcelamento",
        total: 30900
      },
      {
        quantity: 5,
        value: 6300.0,

        cet: 0.5,
        total: 31500.0
      },
      { quantity: 6, value: 5283.33, cet: 0.5, total: 31699.98 },
      { quantity: 7, value: 4542.85, cet: 0.5, total: 31800.0 }
    ]
  }
}
