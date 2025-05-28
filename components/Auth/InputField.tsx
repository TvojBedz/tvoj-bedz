import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";

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
            <Input
                className="text-md w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export function PasswordField({ value, onChange, error, placeholder = "Lozinka" }: InputFieldProps) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative">
            <Input
                className="text-md w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type={visible ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gray-800"
                tabIndex={-1}
            >
                {visible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
