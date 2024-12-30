import { OpenBookIcon } from "../icons/OpenBookIcon"
import { TweeterIcon } from "../icons/TweeterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"

const Sidebar = () => {
    return (
        <div className="h-screen w-72 shadow-md">
            <div className="w-full p-4 flex items-center justify-center gap-2 text-2xl font-bold">
                <h1 className="">♾️ Second Brain</h1>
            </div>
            <div className="text-black">
                <OpenBookIcon />
                <TweeterIcon />
                <YoutubeIcon />
            </div>
        </div>
    )
}

export default Sidebar