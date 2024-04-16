import { Link } from "react-router-dom";
import SimpleList from "../../components/simple-list";
import styles from './Tasks.module.css'

function Tasks(){
    return (
        <div className={styles.container}>
            <SimpleList
            title='Ts-React project tasks'
            item1='Develop the NodeJs API'
            item2='Create the react components'
            item3='Organize the web pages'
            />
            <Link to='/'>Go back to home</Link>
        </div>
    )
}

export default Tasks