import { Link } from "react-router-dom"
import styles from './Home.module.css'

function Home(){

    return (
        <div className={styles.container}>
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