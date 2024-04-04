import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react'

interface Props
  extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > {
  errorMessage?: string
}

export function Input ({ errorMessage, ...InputProps }: Props): React.ReactNode {
  // const className = classNames(InputProps.className, {
  //   'border-4 border-red-500': typeof error === 'string'
  // })

  return <input {...InputProps} />
}
