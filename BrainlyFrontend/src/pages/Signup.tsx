import InputFeild from '../components/InputFeild'
import Button from '../components/Button'
import { useRef, useState } from 'react'
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const firstnameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signup = async () => {
        setLoading(true);
        const data = {
            firstName: firstnameRef.current?.value,
            lastName: lastnameRef.current?.value,
            username: usernameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        }

        await axios.post(`${BACKEND_URL}/api/v1/users/register`, { ...data })
        alert("Signup Successfully")
        setLoading(false);
    }

    return (
        <div className="h-screen w-screen bg-gray-600 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
                <p className='text-sky-600 font-semibold uppercase text-center text-xl underline'>Signup</p>
                <InputFeild label="Firstname" placeholder="Enter your firstname" refrance={firstnameRef} />
                <InputFeild label="Lastname" placeholder="Enter your lastname" refrance={lastnameRef} />
                <InputFeild label="Username" placeholder="Enter your username" refrance={usernameRef} />
                <InputFeild label="Email" placeholder="Enter your email" refrance={emailRef} />
                <InputFeild label="Password" placeholder="Entern your Password" refrance={passwordRef} />
                <Button text="Signup" onClick={() => { signup() }} loading={loading} />
                <p className='text-center'>Already have an account ? <Link to="/signin" className='text-sky-600 underline'>signin</Link></p>
            </div>
        </div>
    )
}

export default Signup
