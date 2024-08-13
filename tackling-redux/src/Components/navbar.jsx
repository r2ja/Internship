import '../CSS/navbar.css'
import { Navlink } from 'react';


const Navbar = () =>
{
    return (
        <div className='header'>
            <h1>Producto</h1>
            <Nav>
                <Navlink to = "/">Home</Navlink>
                <Navlink to = "products">Products</Navlink>
                <Navlink to = "checkout">Checkout</Navlink>
            </Nav>
        </div>
    )
}

export default Navbar;