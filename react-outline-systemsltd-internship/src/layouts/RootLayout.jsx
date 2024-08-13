import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="list"> List </NavLink>
                    <NavLink to="nested"> Nested </NavLink>
                    <NavLink to="table">Table</NavLink>

                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}