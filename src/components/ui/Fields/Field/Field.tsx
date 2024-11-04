import { type InputHTMLAttributes, forwardRef } from 'react'
import './Field.sass'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  extra?: string
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, extra, ...rest }, ref) => (
    <div className={`${extra} field`}>
      <label>
        {label}
        <input ref={ref} className={'field__input'} {...rest} />
      </label>
    </div>
  ),
)

Field.displayName = 'field'
