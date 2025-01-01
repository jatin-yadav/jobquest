import { DocumentIcon } from "../icons/DocumentIcon"
import { HashTagIcon } from "../icons/HashTagIcon"
import { LinkIcon } from "../icons/LinkIcon"
import { TweeterIcon } from "../icons/TweeterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
    return (
        <div className="h-screen w-72 shadow-md">
            <div className="w-full p-4 flex items-center justify-center gap-2 text-2xl font-bold">
                <h1 className="">♾️ Second Brain</h1>
            </div>
            <div className="text-gray-500">
                <SidebarItem icon={<TweeterIcon />} title="Tweeter" />
                <SidebarItem icon={<YoutubeIcon />} title="Youtube" />
                <SidebarItem icon={<DocumentIcon />} title="Documents" />
                <SidebarItem icon={<LinkIcon />} title="Links" />
                <SidebarItem icon={<HashTagIcon />} title="Tags" />
            </div>
        </div>
    )
}

export default Sidebar