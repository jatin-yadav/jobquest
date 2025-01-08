import { contentTypes } from "../config"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
    return (
        <div className="h-screen w-72 shadow-md">
            <div className="w-full p-4 flex items-center justify-center gap-2 text-2xl font-bold">
                <h1 className="">♾️ Second Brain</h1>
            </div>
            <div className="text-gray-500">
                {contentTypes.map(({ icon, label }) => (
                    <SidebarItem key={label} icon={icon()} title={label} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar