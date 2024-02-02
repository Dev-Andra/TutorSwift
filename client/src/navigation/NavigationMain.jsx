import { Outlet } from "react-router-dom"

export default function NavigationMain() {
    return (
        <div>
            <h1 className={`text-9xl font-bold`}>Hi</h1>
            <Outlet/>
        </div>
    )
}