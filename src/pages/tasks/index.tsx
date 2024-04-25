import styles from './Tasks.module.css'
import TaskForm from "../../components/task-form";
import Layout from "../../components/layout";

function Tasks(){
    return (
        <Layout>
            <div className={styles.container}>
                <TaskForm name={'Tasks'} />
            </div>
        </Layout>
    )
}

export default Tasks