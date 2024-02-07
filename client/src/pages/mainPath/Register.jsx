import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const response = await axios.post('http://localhost:5000/auth/register', { data: formData }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Here, you can handle the submission logic, like sending the data to a server or performing other actions.
        if (response.data === 200) {
            navigate('/register/verify-email', { replace: true, state: {email: formData.email} });
        }
    };

    return (
        <div className='w-screen flex justify-center items-center flex-col '>
            <div>
                <label htmlFor="username" className='text-lg font-semibold'>Username</label><br/>
                <input className={`px-5 py-2 text-xl focus:outline-none border-2 rounded-md border-gray-500`} type="text" id="username" name="username" value={formData.username} onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/><br/>
            </div>
            <div>
                <label htmlFor="password" className='text-lg font-semibold'>Password</label><br/>
                <input className={`px-5 py-2 text-xl focus:outline-none border-2 rounded-md border-gray-500`} type="text" id="password" name="password" value={formData.password} onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/><br/>
            </div>
            <div className='mb-10'>
                <label htmlFor="email" className='text-lg font-semibold'>Email</label><br/>
                <input className={`px-5 py-2 text-xl focus:outline-none border-2 rounded-md border-gray-500`} type="text" id="email" name="email" value={formData.email} onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/><br/>
            </div>
                <button className={`bg-blue-500 rounded-md px-10 py-5 cursor-pointer text-2xl font-semibold`} onClick={() => handleSubmit()}>Register</button>
        </div>
    )
}
