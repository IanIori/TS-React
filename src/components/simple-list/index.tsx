import styles from './SimpleList.module.css'

interface Props {
    title: String
    item1: String
    item2: String
    item3: String
}

function SimpleList({title, item1, item2, item3}: Props) {
    return (
        <>
            <div className={styles.rect}>
                {title}  
                <ul className={styles.ul}>
                    {item1}
                    {item2}
                    {item3}
                </ul>
                <div className={styles.separator}></div>
            </div>
        </>
    )
}

export default SimpleList