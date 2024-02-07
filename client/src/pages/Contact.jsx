import { Outlet, useNavigate } from "react-router-dom"

export default function Contact() {
    const navigate = useNavigate();

    return (
        <div className="w-screen flex justify-center items-center flex-col">
            <div className="flex flex-row mb-5">
                <div className="mr-10">
                    <p className="text-lg font-semibold">Name</p>
                    <input className="border-2 border-gray-500 px-5 py-2 rounded-md" placeholder="Billy Bob" />
                </div>

                <div>
                    <p className="text-lg font-semibold">Email</p>
                    <input className="border-2 border-gray-500 px-5 py-2 rounded-md" placeholder="someone@example.com" />
                </div>
            </div>
            <div className="mb-10">
                <p className="text-lg font-semibold">Message</p>
                <input className="border-2 border-gray-500 px-5 py-2 rounded-md" placeholder="..." />
            </div>

            <button className="px-5 py-2 bg-blue-400 text-slate-200 hover:bg-blue-200 hover:text-black transition-colors ease-in-out duration-500 rounded-md">Submit</button>
        </div>
    )
}