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
        if (response.data === "200") {
            navigate('/register/verify-email', { replace: true });
        }
    };

    return (
        <div>
                <label htmlFor="username">Username</label><br/>
                <input type="text" id="username" name="username" value={formData.username} onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="text" id="password" name="password" value={formData.password} onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="text" id="email" name="email" value={formData.email} onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/><br/>
                <button className={`bg-blue-500 rounded-md px-10 py-5 cursor-pointer`} onClick={() => handleSubmit()}>Register</button>
        </div>
    )
}
