import classNames from "classnames"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string
}

export function Input({
  error,
  ...InputProps
}: Props){
  const className = classNames(InputProps.className, {
    'border-4 border-red-500': typeof error === 'string' 
  })
  
  return (
    <input {...InputProps}/>
  )
}