"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { ArrowLeft, ChevronLeft } from "lucide-react"

export const BackToPaymentsOptions = () => {
  const pathname = usePathname()
  return (
    <Link
      className={cn(
        "absolute left-4 top-10 flex items-center text-base font-semibold lg:left-10",
        !pathname.includes("/installments-info") && "hidden"
      )}
      href="/"
    >
      <ChevronLeft className="mr-1 inline-block" />
      Pagamentos
    </Link>
  )
}
