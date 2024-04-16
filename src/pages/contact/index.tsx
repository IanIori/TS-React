import { Link } from "react-router-dom";
import ContactForm from "../../components/contact-form";
import styles from './Contact.module.css'

function Contact(){
    return (
            <div className={styles.container}>
                <h1>Contact</h1>
                <ContactForm title='Entre em contato'></ContactForm>
                <Link className={styles.Link} to='/'>Go back to home</Link>
            </div>
    )
}

export default Contact