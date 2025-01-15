import { Link } from "react-router-dom"
import Button from "../components/Button"
const HomeNavigation = () => {

    return (
        <nav className="flex justify-between w-full p-4 shadow-md bg-gray-200">
            <div><h1 className="text-2xl font-bold text-sky-500">♾️ Second Brain</h1></div>
            <div className="flex gap-4">
                <Link to='/signin'>
                    <Button text="Signin" />
                </Link>
                <Link to='/signup'>
                    <Button variant="secondary" text="Signup" />
                </Link>
            </div>
        </nav>
    )
}

export default HomeNavigation