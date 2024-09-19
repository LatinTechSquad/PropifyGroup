import { useFormContext } from "react-hook-form";
import { useState } from "react";

type InputTextProps = {
    fieldName: string;
    placeholder?: string;
    styles?: string;
    type: 'text' | 'password' | 'email' | 'number';
    validationRules?: object; 

}

const InputText = ({ fieldName, type, placeholder, styles, validationRules }: InputTextProps) => {
    const { register, formState: { errors, touchedFields, isValidating } } = useFormContext();
    const [isFocused, setIsFocused] = useState(false);

    const hasError = !!errors[fieldName];
    const isTouched = !!touchedFields[fieldName];
    const isFieldValid = isValidating && !hasError;

    const inputClassNames = `
        w-full mb-4 rounded-2xl bg-gray-50 border outline-none px-16 py-2
        ${isFocused ? 'border-blue-500' : ''}
        ${hasError ? 'border-red-500' : ''}
        ${isFieldValid ? 'border-green-500' : ''}
    `;

    return (
        <div className={`flex flex-col ${styles ?? ''}`}>
            <input
                {...register(fieldName, validationRules)}
                className={inputClassNames}
                type={type}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {hasError && <span className="text-red-500">{String(errors[fieldName]?.message)}</span>}
        </div>
    );
}

export default InputText;