import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function VerifyEmail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [code, setCode] = useState();
    const   [entered, setEntered] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        async function sendEmail() {
            const responseEmail = await axios.get(`http://localhost:5000/verify-email/${location.state.email.split("@")[0]}`);
            console.log(responseEmail.data)
            setCode(responseEmail.data.code.toString());
        }

        sendEmail();
    }, []);

    function verifyCode() {
        if (entered === code) {
            navigate('/tutors');
            console.log("Yes", typeof entered)
        } else {
            setError("Wrong Code! Try Again!");
            setEntered("");
            console.log("NO", typeof entered, typeof code);
        }
    }

    return (
        <div className="w-screen flex flex-col justify-center items-center">
            <p className='text-center text-2xl mb-5 mt-20'>A verification code has been sent to your email!</p>
            <input className="border-2 border-gray-400 rounded-md px-10 py-5 text-2xl w-1/6 mb-5" value={entered} onChange={(e) => setEntered(e.target.value)}/>
            <button className='px-5 py-2 bg-green-400 rounded-lg text-xl font-semibold=' onClick={verifyCode}>Submit</button>
        </div>
    )
}