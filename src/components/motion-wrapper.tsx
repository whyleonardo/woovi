"use client"

import { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { motion } from "framer-motion"

interface MotionWrapperProps {
  children: ReactNode
  className?: string
}

export const MotionWrapper = ({ children, className }: MotionWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
