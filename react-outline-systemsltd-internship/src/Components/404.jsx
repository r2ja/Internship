import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <>
            <h1>404</h1>
            <p>Web Page does not exist.</p>
            <p>Go back to the <Link to="/">Homepage</Link></p>

        </>
    )
}