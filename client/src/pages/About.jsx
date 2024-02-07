import { Outlet, useNavigate } from "react-router-dom"

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="w-screen">
            
            <Outlet/>
        </div>
    )
}