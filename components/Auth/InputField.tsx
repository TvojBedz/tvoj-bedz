import { Input } from "@/components/ui/input";

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export function InputField({ type, placeholder, value, onChange, error }: InputFieldProps) {
    return (
        <div>
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
