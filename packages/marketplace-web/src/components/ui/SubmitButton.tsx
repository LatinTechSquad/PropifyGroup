import { FieldValues, useFormContext } from "react-hook-form";

type SubmitButtonProps<T> = {
    label: string;
    styles?: string;
    onSubmit: (data: T) => void;
    disabled?: boolean;
};

const SubmitButton = <T extends FieldValues,>({ label, styles, disabled, onSubmit }: SubmitButtonProps<T>) => {
    const { handleSubmit } = useFormContext<T>();

    return (
        <div className={`bg-primary-color ${styles ?? ''}`}>
            <button
                onClick={handleSubmit(onSubmit)}
                disabled={disabled}
                className="w-full bg-primary-color text-white ">
                {label}
            </button>
        </div>
    );
};

export default SubmitButton;
