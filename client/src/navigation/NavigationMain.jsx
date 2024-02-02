import { Outlet } from "react-router-dom"

export default function NavigationMain() {
    return (
        <div className="w-screen">
            <div className="flex flex-row w-4/6 mx-auto">
                <h1 className={`text-5xl font-bold`}>Hi</h1>
            </div>
            <Outlet/>
        </div>
    )
}