import { RefObject } from 'react';

const InputFeild = ({ refrance, placeholder, label }: { refrance?: RefObject<HTMLInputElement>, placeholder: string, label: string }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={label}>{label}</label>
            <input type="text" id={label} name={label} ref={refrance} placeholder={placeholder} className="px-4 py-2 border rounded my-2 min-w-96" />
        </div>
    )
}

export default InputFeild