export const formatCreditCardExpiration = (value: string) => {
  const cleanedValue = value

  if (cleanedValue.length <= 6) {
    return cleanedValue
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d{1,2})/, "$1/$2")
      .substring(0, 5)
  }

  return cleanedValue
}
