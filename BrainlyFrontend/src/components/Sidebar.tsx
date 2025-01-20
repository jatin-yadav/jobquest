import { useState } from "react";
import { BACKEND_URL, brainContentTypes, questionContentTypes } from "../config"
import { useAuth } from "../context/AuthContext";
import { LogoutIcon } from "../icons/LogoutIcon";
import Button from "./Button"
import SidebarItem from "./SidebarItem"
import axios from "axios";

const Sidebar = () => {
    const [loading, setLoading] = useState(false);
    const { logout, token, currentDashboard } = useAuth()
    const handleLogout = () => {
        logout()
    };

    const handleStopSharing = async () => {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/share/create`, { share: false }, {
                headers: {
                    "Authorization": token
                }
            })
            alert(`${res?.data?.message}`)
            setLoading(false);
        } catch (error) {
            alert(`${error}`)
            setLoading(false);
        }
    }
    return (
        <div className="h-screen w-72 shadow-md">
            <div className="flex flex-col h-full">
                <div className="w-full p-4 flex items-center justify-center gap-2 ">
                    <h1 className="text-2xl font-bold">♾️ Second Brain</h1>
                </div>
                <div className="text-gray-500">

                    {currentDashboard === 'braindashboard' ? brainContentTypes.map(({ icon, label }) => (
                        <SidebarItem key={label} icon={icon()} title={label} />
                    )) : questionContentTypes.map(({ icon, label }) => (
                        <SidebarItem key={label} icon={icon()} title={label} />
                    ))}
                </div>
                <div className="mt-auto py-4 flex flex-col gap-2 justify-center items-center">
                    <Button variant="secondary" text="Stop sharing" onClick={() => { handleStopSharing() }} loading={loading} />
                    <Button text="Logout" onClick={() => { handleLogout() }} startIcon={<LogoutIcon />} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar