import { CloseIcon } from "../icons/CloseIcon";
import Button from "./Button";
import InputFeild from "./InputFeild";

interface CreateContentModalProps {
    onClose: () => void;
    open: boolean;
}
const CreateContentModal: React.FunctionComponent<CreateContentModalProps> = ({ open, onClose }) => {
    return (
        <div>{open && <div className="h-screen w-screen bg-gray-600/70 fixed top-0 left-0 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
                <div className="self-end">
                    <button onClick={onClose} className="">
                        <CloseIcon />
                    </button>
                </div>
                <InputFeild label="Title" placeholder="Enter title" onChange={() => { }} />
                <InputFeild label="Link" placeholder="Enter title" onChange={() => { }} />
                <Button text="Submit Content" onClick={() => { }} />
            </div>
        </div>}</div>
    )
}

export default CreateContentModal