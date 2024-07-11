import { ReactNode } from "react"

import { Icons } from "@/components/icons"
import { Logo } from "@/components/logo"

import { SplashScreenProvider } from "@/providers/splash-screen-provider"

interface WooviLayoutProps {
  children: ReactNode
}

export default function WooviLayout({ children }: WooviLayoutProps) {
  return (
    <SplashScreenProvider>
      <div className="flex flex-col items-center gap-8 p-4">
        <header>
          <Logo.Colored className="h-9 w-28" />
        </header>

        {children}

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
