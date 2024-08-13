import { useState } from "react"
import { Navigate } from "react-router-dom";

function Table()
{
    const [user, setUser] = useState('Raja')

    if (!user)
    {
        return <Navigate to="/" />
    }

    return (    
        <div className="table-class">
            <p> A simple log-out simulation</p>
            <button onClick={() => setUser(null)}>Log Out</button>

        </div>
    )
}

export const tableLoader = async() => {
    const res = await fetch('http://localhost:3000/')
    if (!res) {
        return redirect("/*")
    }

    console.log("Hello", res.json)
    return res.json()
}

export default Table;
