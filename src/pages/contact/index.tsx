import ContactForm from "../../components/contact-form";
import Layout from "../../components/layout";

function Contact(){
    return (
            <Layout>
                <h1>Contact</h1>
                <ContactForm title='Contact us'></ContactForm>
            </Layout>
    )
}

export default Contact