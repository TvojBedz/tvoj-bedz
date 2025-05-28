interface AuthToggleProps {
    mode: "login" | "register";
    setMode: (mode: "login" | "register") => void;
    clearErrors: () => void;
}

export function AuthToggle({ mode, setMode, clearErrors }: AuthToggleProps) {
    return (
        <p className="text-sm text-center mt-4">
            {mode === "login" ? (
                <>
                    Nemate nalog?{" "}
                    <button
                        type="button"
                        onClick={() => {
                            setMode("register");
                            clearErrors();
                        }}
                        className="text-blue-600 underline"
                    >
                        Registrujte se
                    </button>
                </>
            ) : (
                <>
                    Već imate nalog?{" "}
                    <button
                        type="button"
                        onClick={() => {
                            setMode("login");
                            clearErrors();
                        }}
                        className="text-blue-600 underline"
                    >
                        Prijavite se
                    </button>
                </>
            )}
        </p>
    );
}
