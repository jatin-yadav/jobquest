import axios from "axios";
import Button from "../components/Button"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { BACKEND_URL } from "../config";
import { useState } from "react";

interface NavBarProps {
    openModel: () => void;
}

const NavBar = ({ openModel }: NavBarProps) => {
    const [loading, setLoading] = useState(false);

    const SharedBrain = async () => {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/share/create`, { share: true }, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            alert(`go to: http://localhost:5173/share/${res?.data?.data}`)
            setLoading(false);
        } catch (error) {
            alert(`${error}`)
            setLoading(false);
        }
    }

    return (
        <nav className="flex justify-between w-full p-4 shadow-md bg-gray-200">
            <div><h1 className="text-2xl font-medium">All Notes</h1></div>
            <div className="flex gap-4">
                <Button text="Add Content" onClick={() => { openModel() }} startIcon={<PlusIcon />} />
                <Button variant="secondary" text="Share brain" loading={loading} onClick={() => { SharedBrain() }} startIcon={<ShareIcon />} />
            </div>
        </nav>
    )
}

export default NavBar