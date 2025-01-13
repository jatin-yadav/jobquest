import { contentTypes } from "../config"
import { useAuth } from "../context/AuthContext";
import { LogoutIcon } from "../icons/LogoutIcon";
import Button from "./Button"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
    const { logout } = useAuth()
    const handleLogout = () => {
        logout()
    };
    return (
        <div className="h-screen w-72 shadow-md">
            <div className="flex flex-col h-full">
                <div className="w-full p-4 flex items-center justify-center gap-2 text-2xl font-bold">
                    <h1 className="">♾️ Second Brain</h1>
                </div>
                <div className="text-gray-500">
                    {contentTypes.map(({ icon, label }) => (
                        <SidebarItem key={label} icon={icon()} title={label} />
                    ))}
                </div>
                <div className="mt-auto py-4 flex justify-center items-center">
                    <Button text="Logout" onClick={() => { handleLogout() }} startIcon={<LogoutIcon />} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar