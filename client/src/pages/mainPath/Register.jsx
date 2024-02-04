import { useState } from 'react';
import axios from 'axios';


export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/auth/register', { data: formData }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Here, you can handle the submission logic, like sending the data to a server or performing other actions.
        console.log('Form data submitted:', response.data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br/>
                <input type="text" id="username" name="username" value={formData.username} onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="text" id="password" name="password" value={formData.password} onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="text" id="Email" name="Email" value={formData.Email} onChange={(e) => {setFormData({...formData, [e.target.name]:e.target.value})}}/><br/>
                <button type="submit" className={`bg-blue-500 rounded-md px-10 py-5 cursor-pointer`}>Register</button>
            </form>
        </div>
    )
}
