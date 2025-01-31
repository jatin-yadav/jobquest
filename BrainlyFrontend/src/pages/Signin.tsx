import InputFeild from '../components/InputFeild'
import Button from '../components/Button'
import { useRef, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';



const Signin = () => {
    const [loading, setLoading] = useState(false);

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { login, addToken, currentDashboard } = useAuth();
    const navigate = useNavigate();

    const signin = async () => {
        setLoading(true);
        const data = {
            username: usernameRef.current?.value,
            password: passwordRef.current?.value
        }

        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/users/login`, { ...data })
            // localStorage.setItem("token", res?.data?.data?.accessToken)
            // alert(`${res?.data?.message}`)
            addToken(res?.data?.data?.accessToken)
            login();
            setLoading(false);
            navigate(`/${currentDashboard}`)
        } catch (error) {
            alert(`${error}`)
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-600 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
                <p className='text-sky-600 font-semibold uppercase text-center text-xl underline'>Signin</p>
                <InputFeild label="Username" placeholder="Enter username" refrance={usernameRef} />
                <InputFeild label="Password" placeholder="Enter Password" refrance={passwordRef} />
                <Button text="Signin" loading={loading} onClick={() => { signin() }} />
                <p className='text-center'>Don't have an account ? <Link to="/signup" className='text-sky-600 underline'>signup</Link></p>
            </div>
        </div>
    )
}

export default Signin