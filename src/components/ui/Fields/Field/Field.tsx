import { type InputHTMLAttributes, forwardRef } from 'react'
import './Field.sass'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  isTextarea?: boolean
  extra?: string
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, extra, isTextarea, ...rest }, ref) => {
    return (
      <div className={`${extra} field`}>
        <label>
          {label}
          {isTextarea ? (
            // @ts-ignore
            <textarea ref={ref} className='field__input' {...rest}></textarea>
          ) : (
            <input ref={ref} className='field__input' {...rest} />
          )}
        </label>
      </div>
    )
  },
)

Field.displayName = 'field'
