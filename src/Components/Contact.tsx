import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="max-cont" id="contact" aria-label="contact">
      <SectionHeading name="CONTACT" />
      <ContactForm />
    </section>
  );
}
