import { NavLink, Outlet } from 'react-router-dom'
import './rootlayout.css'

export default function RootLayout() {
    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <NavLink className="link" to="/"> Home </NavLink>
                    <NavLink className="link" to="Products"> Products </NavLink>
                    <NavLink className="link" to="cart"> Cart </NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}