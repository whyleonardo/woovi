import { Nunito } from "next/font/google"
import localFont from "next/font/local"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

const calSans = localFont({
  src: "./cal-sans/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans"
})

const nunito = Nunito({
  variable: "--font-nunito"
})

export const fontCalSans = calSans.variable
export const fontSans = GeistSans.variable
export const fontMono = GeistMono.variable
export const fontNunito = nunito.variable
