import InputFeild from '../components/InputFeild'
import Button from '../components/Button'
import { useRef, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';


const Signin = () => {
    const [loading, setLoading] = useState(false);

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signin = async () => {
        setLoading(true);
        const data = {
            username: usernameRef.current?.value,
            password: passwordRef.current?.value
        }

        const res = await axios.post(`${BACKEND_URL}/api/v1/users/login`, { ...data })
        localStorage.setItem("token", res?.data?.data?.accessToken)
        
        alert(`${res?.data?.message}`)
        setLoading(false);
    }

    return (
        <div className="h-screen w-screen bg-gray-600 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
                <InputFeild label="Username" placeholder="Enter username" refrance={usernameRef} />
                <InputFeild label="Password" placeholder="Enter Password" refrance={passwordRef} />
                <Button text="Signin" loading={loading} onClick={() => { signin() }} />
            </div>
        </div>
    )
}

export default Signin