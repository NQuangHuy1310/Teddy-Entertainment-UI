import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(
  'flex items-center justify-center whitespace-normal rounded-md bg-transparent border-[1px] border-transparent font-roboto text-base font-normal text-black',
  {
    variants: {
      variant: {
        default: 'border-[1px] border-black bg-white text-black hover:opacity-80 hover:transition-all',
        background: 'bg-primary text-white border-[1px] border-transparent hover:opacity-90 hover:transition-all',
        error: 'bg-error text-white border-none',
        success: 'bg-primary text-white border-none',
        link: 'text-primary underline-offset-4 hover:underline hover:transiton-all',
        outLine:
          'bg-white border-[2px] dark:border-Dark dark:text-Dark dark:bg-White border-black text-black rounded-lg hover:transition-all hover:border-primary'
      },
      size: {
        default: 'px-5 py-2',
        md: 'px-6 py-3 rounded-md',
        lg: 'px-7 py-3.5 rounded-mb text-lg',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentProps<'button'> & {
    to?: string
    href?: string
    type?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    disabled?: boolean
    children?: string | React.ReactNode
    onClick?: () => void
  }

export const Button = ({
  variant,
  size,
  className,
  to,
  href,
  type,
  leftIcon,
  rightIcon,
  disabled,
  onClick,
  children
}: ButtonProps) => {
  let Comp: ElementType = 'button'
  const props: any = { onClick }

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  if (type) {
    props.type = type
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  return (
    <Comp className={twMerge(buttonStyles({ variant, size }), className)} {...props} onClick={onClick}>
      {leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </Comp>
  )
}
