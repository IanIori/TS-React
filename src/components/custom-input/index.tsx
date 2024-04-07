import styles from "./CustomInput.module.css"

interface Props {
  initialValue: string;
  type: string;
  placeholderText: string;
}

function CustomInput ({initialValue, type,placeholderText}: Props) {
    return (
        <input
        className={styles.customInput}
        type = {type}
        value = {initialValue}
        placeholder = {placeholderText}
        />
    )
}

export default CustomInput