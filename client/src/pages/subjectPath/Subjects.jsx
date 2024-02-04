import { Outlet, useNavigate } from "react-router-dom"

export default function Subjects() {
    const navigate = useNavigate();

    return (
        <div className="w-screen">
            
            <Outlet/>
        </div>
    )
}