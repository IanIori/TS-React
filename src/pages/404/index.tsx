import { Link } from "react-router-dom"

function NotFound(){
    return (
        <>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to='/'>Go back to home</Link>
        </>
    )
}

export default NotFound