import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, id, value, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          id={id}
          type={type}
          className={cn(
            "peer flex h-14 w-full rounded-md border-2 border-input bg-transparent px-3 py-0.5 text-lg font-semibold text-woovi-dark-gray transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-woovi-green focus-visible:outline-none focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />

        <label
          htmlFor={id}
          className={cn(
            "absolute left-5 top-4 bg-white px-0.5 transition-all",
            "text-base font-semibold text-woovi-dark-gray",
            "peer-focus:-translate-x-2 peer-focus:-translate-y-[1.55rem] peer-focus:text-sm",
            value !== "" && "-translate-x-2 -translate-y-[1.55rem] text-sm",
            className
          )}
        >
          {label}
        </label>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
