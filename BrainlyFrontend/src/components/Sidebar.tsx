import { OpenBookIcon } from "../icons/OpenBookIcon"

const Sidebar = () => {
    return (
        <div className="h-screen w-72 shadow-md">
            <div className="w-full p-4 flex items-center justify-center gap-2 text-2xl font-bold">
                <OpenBookIcon />
                <h1 className="">Second Brain</h1>
            </div>
        </div>
    )
}

export default Sidebar