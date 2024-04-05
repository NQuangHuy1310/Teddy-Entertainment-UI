import * as React from 'react'
import { twMerge } from 'tailwind-merge'
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={twMerge(
        'flex max-h-[3rem] w-full rounded-md border-[1px] border-[#B1B5C3] bg-White px-5 py-2 text-base text-[#777E90] focus:outline-none disabled:opacity-50 md:px-6 md:py-3',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export default Input
