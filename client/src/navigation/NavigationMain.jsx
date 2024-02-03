import { Outlet } from "react-router-dom"

export default function NavigationMain() {
    return (
        <div className="w-screen">
            <div className="flex flex-row w-4/6 mx-auto px-10 py-5 2xl:w-4/6 xl:w-4/6 l:w-4/6 md:w-5/6 sm:w-screen">
                <h1 className={`text-5xl font-bold`}>TutorSwift</h1>
            </div>
            <Outlet/>
        </div>
    )
}