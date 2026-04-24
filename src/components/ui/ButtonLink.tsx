import type { PropsWithChildren } from 'react'

type ButtonLinkProps = PropsWithChildren<{
  href: string
  variant?: 'primary' | 'outline'
  className?: string
  onClick?: () => void
  target?: '_blank' | '_self'
  rel?: string
}>

export function ButtonLink({
  href,
  variant = 'primary',
  className = '',
  onClick,
  target,
  rel,
  children,
}: ButtonLinkProps) {
  const baseClass =
    'rounded-sm px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em]'
  const variantClass =
    variant === 'primary'
      ? 'bg-[#9d6b5b] text-[#fffdf8]'
      : 'border border-[#e2d6c8] bg-[#fffdf8]/80 text-[#1f1812]'

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`${baseClass} ${variantClass} ${className}`.trim()}
    >
      {children}
    </a>
  )
}
