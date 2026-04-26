import AppLayout from "../appLayout/AppLayout";
import ContactForm from "../components/contactInfo/ContactForm";
import Info from "../components/info/Info";

function Contact() {
  return (
    <AppLayout page={"Contact"}>
          <Info title="Contact Us" description="Have questions or want to learn more about SkillVerify? We're here to help! Reach out to our support team for assistance, feedback, or any inquiries you may have. Your success is our priority, and we're committed to providing you with the best experience possible." page="contact"/>
          <ContactForm  />
    </AppLayout>
  
  )
}

export default Contact