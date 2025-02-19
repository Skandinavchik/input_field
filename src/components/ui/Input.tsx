import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, JSX, useState } from 'react'

type InputProps = {
  label?: string
  icon?: JSX.Element
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: FC<InputProps> = ({ id, label, required, icon, ...rest }) => {
  const [value, setValue] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)
  }

  return (
    <p>
      {label && id && (
        <label htmlFor={id} className='inline-block mb-2 text-content-x-high text-sm md:text-base font-semibold md:font-medium leading-[17px] md:leading-[22px] tracking-[0.16px]'>
          { label } {required && <span className="text-content-danger">*</span>}
        </label>
      )}

      <span className="relative block">
        {icon && (
          <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${value ? 'text-content-x-high' : 'text-surface-x-high'}`}>
            {icon}
          </span>
        )}

        <input
          id={id}
          value={value}
          onChange={handleInputChange}
          {...rest}
          className={`flex min-h-12 w-full ${icon ? 'pl-10' : 'pl-4'} pr-2 py-3 rounded-xl bg-transparent border ${required && !value ? 'border-surface-danger focus-visible:ring-surface-danger' : 'border-surface-x-high focus-visible:border-state-focus focus-visible:ring-state-focus'}  text-content-x-high tracking-[0.01px] leading-[22px] transition-colors placeholder:text-content-low placeholder:tracking-[0.01px] focus-visible:outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 file:px-2`}
        />
      </span>
    </p>
  )
}

export default Input
