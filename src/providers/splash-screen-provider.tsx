"use client"

import { ReactNode, useEffect, useState } from "react"

import { Logo } from "@/components/logo"

import { AnimatePresence, motion } from "framer-motion"

interface MotionWrapperProps {
  children: ReactNode
}

export const SplashScreenProvider = ({ children }: MotionWrapperProps) => {
  const [appIsLoading, setAppIsLoading] = useState(true)

  useEffect(() => {
    const loop = setTimeout(() => {
      setAppIsLoading(false)
    }, 1500)

    return () => clearTimeout(loop)
  }, [])

  if (appIsLoading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex h-dvh items-center justify-center"
        >
          <Logo.Colored className="h-9 w-28 animate-bounce" />
        </motion.div>
      </AnimatePresence>
    )
  }
  return <>{children}</>
}
