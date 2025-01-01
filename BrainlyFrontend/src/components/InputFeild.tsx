const InputFeild = ({ onChange, placeholder, label }: { onChange: () => void, placeholder: string, label: string }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={label}>{label}</label>
            <input type="text" id={label} name={label} onChange={onChange} placeholder={placeholder} className="px-4 py-2 border rounded my-2 min-w-96" />
        </div>
    )
}

export default InputFeild