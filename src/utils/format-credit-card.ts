export const formatCreditCard = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "")

  if (cleanedValue.length <= 19) {
    return cleanedValue
      .replace(/(\d{4})/g, "$1 ")
      .replace(/\.$/, "")
      .substring(0, 19)
  }

  return cleanedValue
}
