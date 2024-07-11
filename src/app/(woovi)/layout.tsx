import { ReactNode } from "react"

import { Icons } from "@/components/icons"
import { Logo } from "@/components/logo"

import { SplashScreenProvider } from "@/providers/splash-screen-provider"

import { BackToPaymentsOptions } from "./_components/back-to-payments-options"

interface WooviLayoutProps {
  children: ReactNode
}

export default function WooviLayout({ children }: WooviLayoutProps) {
  return (
    <SplashScreenProvider>
      <div className="relative flex flex-col items-center gap-8 px-4 py-8">
        <BackToPaymentsOptions />

        <header>
          <Logo.Colored className="h-9 w-28" />
        </header>

        <main className="w-full lg:mx-auto lg:max-w-[1440px]">{children}</main>

        <footer>
          <div className="flex items-center text-woovi-muted-gray">
            <Icons.securityCheck className="mr-1 size-4" />
            <span className="text-nowrap text-sm font-semibold">
              Pagamento 100% seguro via:
            </span>
            <Logo.Neutral className="ml-1.5 h-6 w-14" />
          </div>
        </footer>
      </div>
    </SplashScreenProvider>
  )
}
