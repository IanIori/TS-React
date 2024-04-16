import { Link, useNavigate } from "react-router-dom"

function Home(){

    return (
        <div>
            <h1>Home</h1>
            <div>
                <Link to='/about'>Go to about page</Link>
            </div>
            <div>
                <Link to='/contact'>Go to contact page</Link>
            </div>
            <div>
                <Link to='/tasks'>Go to the tasks page</Link>
            </div>
    </div>
    )
}

export default Home