import React from 'react';
import { useFormContext, FieldError } from 'react-hook-form';

type InputTextProps = {
  fieldName: string;
  placeholder?: string;
  styles?: string;
  type: 'text' | 'password' | 'email' | 'number';
};

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ fieldName, type, placeholder, styles }, ref) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();
    const { ref: registerRef, ...rest } = register(fieldName);

    const errorMessage = errors[fieldName]?.message;
    const errorText = typeof errorMessage === 'string' ? errorMessage : undefined;

    return (
      <div className={`flex flex-col ${styles ?? ''}`}>
        <input
          {...rest}
          ref={(e) => {
            registerRef(e);
            if (typeof ref === 'function') {
              ref(e);
            } else if (ref) {
              ref.current = e;
            }
          }}
          className='w-full mb-4 rounded-2xl bg-gray-50 border border-gray-200 outline-none px-16 py-2'
          type={type}
          placeholder={placeholder}
        />
        {errorText && <span className='text-red-500'>{errorText}</span>}
      </div>
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;
