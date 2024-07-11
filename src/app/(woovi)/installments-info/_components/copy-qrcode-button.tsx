"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export const CopyQRCodeButton = () => {
  const { toast } = useToast()
  return (
    <Button
      onClick={async () => {
        await navigator.clipboard.writeText("https://woovi.com")
        toast({
          title: "Seu QR Code foi copiado!",
          className: "text-woovi-dark-gray"
        })
      }}
      variant="woovi"
      size="woovi"
      className="mb-4 mt-8 lg:mb-0 lg:mt-0 lg:w-full"
    >
      Clique para copiar o QR CODE
      <Icons.copy className="ml-2 h-5 w-5" />
    </Button>
  )
}
