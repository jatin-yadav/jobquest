import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import Button from "./Button";
import InputFeild from "./InputFeild";
import { BACKEND_URL, brainContentTypes } from "../config";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

interface CreateContentModalProps {
    onClose: () => void;
    open: boolean;
}
const CreateContentModal: React.FunctionComponent<CreateContentModalProps> = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false);
    const linkRef = useRef<HTMLInputElement>(null)
    const titleRef = useRef<HTMLInputElement>(null)
    const typeRef = useRef<HTMLSelectElement>(null)
    const { token } = useAuth();

    const createContent = async () => {
        setLoading(true);
        const data = {
            // type: "tweet",
            link: linkRef.current?.value,
            title: titleRef.current?.value,
            type: typeRef.current?.value
        }

        if (data.type === 'youtube') {
            if (data.link) {
                data.link = data.link.replace("watch?v=", "embed/")
            }
        }

        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/content/create`, { ...data }, {
                headers: {
                    "Authorization": token
                }
            })
            alert(`${res?.data?.message}`)
            setLoading(false);
            onClose();
        } catch (error) {
            alert(`${error}`)
            setLoading(false);
        }

    }

    return (
        <div>{open && <div className="h-screen w-screen bg-gray-600/70 fixed top-0 left-0 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
                <div className="self-end">
                    <button onClick={onClose} className="">
                        <CloseIcon />
                    </button>
                </div>
                <InputFeild label="Title" placeholder="Enter title" refrance={titleRef} />
                <InputFeild label="Link" placeholder="Enter title" refrance={linkRef} />
                <select ref={typeRef} className="px-4 py-2 border rounded my-2 min-w-96">
                    {brainContentTypes.map(({ type, label }) => (
                        <option key={type} value={type}>{label}</option>
                    ))}
                </select>
                <Button text="Submit Content" loading={loading} onClick={() => { createContent() }} />
            </div>
        </div>}</div>
    )
}

export default CreateContentModal