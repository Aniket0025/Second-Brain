import type { ChangeEvent } from "react";

export function Input({ onChange, placeholder, type = "text" }: { placeholder: string; onChange?: (e: ChangeEvent<HTMLInputElement>) => void; type?: string }) {
    return <div>
        <input placeholder={placeholder} type={type} className="px-4 py-2 border rounded m-2 w-full" onChange={onChange} />
    </div>
}

export default Input;