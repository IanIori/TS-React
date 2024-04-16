import { Link } from "react-router-dom"
import styles from './About.module.css'

function About(){
    return (
        <div className={styles.container}>
            <h1>About</h1>
            <p>
                This is a project made using TypeScript and ReactJS
            </p>
            <Link to='/'>Go back to home</Link>
        </div>
    )
}

export default About