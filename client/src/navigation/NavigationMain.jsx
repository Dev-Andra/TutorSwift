import { Outlet, useNavigate } from "react-router-dom"

export default function NavigationMain() {
    const navigate = useNavigate();

    return (
        <div className="w-screen h-1/6">
            <div className="flex flex-row w-4/6 mx-auto px-10 py-5 2xl:w-4/6 xl:w-4/6 l:w-4/6 md:w-5/6 sm:w-screen items-center">
            <h1 className={`text-4xl font-bold mr-auto text-green-500 hover:opacity-80 cursor-pointer`} onClick={() => navigate('/')}>Tutor<span className="text-steel-blue">Swift</span></h1>
                <div className="mr-auto flex flex-row">
                    <h2 className="text-2xl mr-10 cursor-pointer hover:text-blue-500 transition-colors duration-500 ease-in-out" onClick={() => {navigate('/tutors')}}>Tutors</h2>
                    <h2 className="text-2xl mr-10 cursor-pointer hover:text-blue-500 transition-colors duration-500 ease-in-out" onClick={() => navigate('/subjects')}>Subjects</h2>
                    <h2 className="text-2xl mr-10 cursor-pointer hover:text-blue-500 transition-colors duration-500 ease-in-out" onClick={() => {navigate('/about')}}>About</h2>
                    <h2 className="text-2xl mr-10 cursor-pointer hover:text-blue-500 transition-colors duration-500 ease-in-out" onClick={() => {navigate('/contact')}}>Contact</h2>
                </div>
                <button className="px-3 py-1.5 bg-green-400 text-xl rounded-lg font-semibold cursor-pointer hover:bg-green-200 transition-color duration-500 ease-in-out mr-3" onClick={() => navigate('/register')}>Register</button>
                <button className="px-3 py-1.5 border-green-400 border-2 text-xl rounded-lg font-semibold cursor-pointer hover:bg-green-200 transition-color duration-500 ease-in-out mr-3">Login</button>
            </div>
            <Outlet/>
        </div>
    )
}