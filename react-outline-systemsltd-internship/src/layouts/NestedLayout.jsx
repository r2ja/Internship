import { NavLink, Outlet } from "react-router-dom";

export default function NestedLayout()
{
    return(
        <div className="nested-layout">
            <h2>This is a Nested Layout.</h2>
            <p>Click on any of these buttons.</p>

            <nav>
                <NavLink to="profile">Open Modal</NavLink>
                <NavLink to="contact">Contact Page</NavLink>
            </nav>
            <Outlet />


        </div>
    )
}