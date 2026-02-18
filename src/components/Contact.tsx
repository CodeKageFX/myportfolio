import Profile from "./Profile"
import ContactComponent from "./ui/Contact/ContactComponent"
import SEO from "./SEO"

const Contact = () => {
  return (
    <div className="flex gap-2">
      <SEO
        title="Contact CodeKage - Let's Build Something Exceptional"
        description="Ready to build exceptional web applications? Contact CodeKage directly via Email, WhatsApp, Twitter, LinkedIn, or GitHub. Quick response guaranteed within 24 hours."
        keywords="contact CodeKage, hire frontend engineer, React developer, web development services, project consultation, collaboration, freelance developer"
        canonicalUrl="https://codekage.pxxl.xyz/contact"
        ogTitle="Contact CodeKage - Frontend Engineer Available for Hire"
        ogDescription="Let's work together to build production-ready web applications. Multiple contact methods available with quick response time."
        ogImage="https://codekage.pxxl.xyz/images/contact.png"
      />
      <Profile />
      <ContactComponent />
    </div>
  )
}

export default Contact