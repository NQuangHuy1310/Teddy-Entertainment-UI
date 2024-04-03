import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(
  'flex items-center justify-center whitespace-normal rounded-md bg-transparent font-roboto text-base font-normal text-black',
  {
    variants: {
      variant: {
        default: 'border-[1px] border-black bg-white text-black hover:opacity-80 hover:transition-all',
        background: 'bg-primary text-white hover:opacity-90 hover:transition-all',
        error: 'bg-error text-white border-none',
        link: 'text-primary underline-offset-4 hover:underline hover:transiton-all'
      },
      size: {
        default: 'px-5 py-2',
        sm: 'px-6 py-3 rounded-md',
        lg: 'px-8 py-4 rounded-mb',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return <button {...props} className={twMerge(buttonStyles({ variant, size }), className)}></button>
}
