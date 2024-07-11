export const PaymentTerm = () => {
  return (
    <div>
      <span className="block text-base font-semibold text-woovi-muted-gray">
        Prazo de pagamento:
      </span>

      <strong className="font-extrabold text-woovi-dark-gray">
        {new Intl.DateTimeFormat("pt-BR", {
          month: "numeric",
          day: "numeric",
          year: "numeric"
        }).format(new Date())}{" "}
        -{" "}
        {new Intl.DateTimeFormat("pt-BR", {
          hour: "numeric",
          minute: "numeric"
        }).format(new Date().setHours(new Date().getHours() + 8))}
      </strong>
    </div>
  )
}
