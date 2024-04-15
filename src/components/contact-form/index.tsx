import ButtonFatec from '../button-fatec'
import CustomInput from '../custom-input'
import styles from './ContactForm.module.css'

interface Props {
    title: string
}

function ContactForm({title}: Props) {
    return (
        <>
            <div className={styles.center}> 
                <div className={styles.rect}>
                {title}
                <div className={styles.separator}></div>
                
                <form>
                <CustomInput type='input' defaultValue='' placeholderText='Nome' />
                <CustomInput type='input' defaultValue='' placeholderText='Email' />
                <CustomInput type='input' defaultValue='' placeholderText='Telefone' />
                </form>

                <div className={styles.separator}></div>

                <ButtonFatec type='button' label='FATEC: Send Mensage' />
                </div>
            </div>
        </>
    )
}

export default ContactForm