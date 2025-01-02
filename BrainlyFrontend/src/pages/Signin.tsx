import InputFeild from '../components/InputFeild'
import Button from '../components/Button'
import { useRef } from 'react';


const Signin = () => {
    const usernameoremailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    return (
        <div className="h-screen w-screen bg-gray-600 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
                <InputFeild label="Username/Email" placeholder="Enter username or  email" refrance={usernameoremailRef} />
                <InputFeild label="Password" placeholder="Enter Password" refrance={passwordRef} />
                <Button text="Signin" onClick={() => { }} />
            </div>
        </div>
    )
}

export default Signin