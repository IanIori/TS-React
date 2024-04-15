import styles from "./CustomInput.module.css"

interface Props {
  defaultValue: string;
  type: string;
  placeholderText: string;
}

function CustomInput ({defaultValue, type,placeholderText}: Props) {
    return (
        <input
        className={styles.customInput}
        type = {type}
        defaultValue = {defaultValue}
        placeholder = {placeholderText}
        />
    )
}

export default CustomInput