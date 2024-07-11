import { ReactNode } from "react"

interface FlagBannerProps {
  children: ReactNode
}

export const FlagBanner = ({ children }: FlagBannerProps) => {
  return (
    <div className="relative flex w-full items-center">
      <svg
        viewBox="0 0 385 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="min-h-8 w-full"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H382.073C383.869 0 384.755 2.18257 383.467 3.43408L371.502 15.0659C370.694 15.8513 370.694 17.1487 371.502 17.9341L383.467 29.5659C384.755 30.8174 383.869 33 382.073 33H4C1.79086 33 0 31.2091 0 29V4Z"
          fill="#133A6F"
        />
      </svg>

      <span className="absolute inset-y-1/2 left-2.5 w-full -translate-y-2.5 text-nowrap text-sm text-white">
        {children}
      </span>
    </div>
  )
}
