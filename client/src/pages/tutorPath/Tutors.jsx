import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Tutors() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="w-screen">
            <div className="flex flex-row w-4/6 mx-auto px-10 py-5 2xl:w-4/6 xl:w-4/6 l:w-4/6 md:w-5/6 sm:w-screen items-center">
                <h1 className={`text-3xl font-bold mr-auto text-green-500 hover:opacity-80 cursor-pointer`} onClick={() => navigate('/')}>Tutor<span className="text-steel-blue">Swift</span></h1>
                <button className="px-3 py-1.5 bg-green-400 text-xl rounded-lg font-semibold cursor-pointer hover:bg-green-200 transition-color duration-500 ease-in-out mr-3">Register</button>
                <button className="px-3 py-1.5 border-green-400 border-2 text-xl rounded-lg font-semibold cursor-pointer hover:bg-green-200 transition-color duration-500 ease-in-out mr-3">Login</button>
            </div>
            {location.pathname === '/tutors' ? (
                /* JSX for when the pathname is '/tutors' */
                <div>This is the Tutors page</div>
            ) : (
                <Outlet/>
            )}
        </div>
    );
}
