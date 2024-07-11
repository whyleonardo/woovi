export const formatCpf = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "") // remove caracteres não numéricos

  if (cleanedValue.length <= 14) {
    return cleanedValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
      .substring(0, 14)
  }

  return cleanedValue
}
