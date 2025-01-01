import Button from "../components/Button"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"

interface NavBarProps {
    openModel: () => void;
}

const NavBar = ({ openModel }: NavBarProps) => {
    return (
        <nav className="flex justify-between w-full p-4 shadow-md bg-gray-200">
            <div><h1 className="text-2xl font-medium">All Notes</h1></div>
            <div className="flex gap-4">
                <Button text="Add Content" onClick={() => { openModel() }} startIcon={<PlusIcon />} />
                <Button variant="secondary" text="Share brain" onClick={() => console.log("Button clicked")} startIcon={<ShareIcon />} />
            </div>
        </nav>
    )
}

export default NavBar