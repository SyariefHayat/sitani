import Navbar from "@/components/layouts/landing-layout/navbar"
import NavMenuLinks from "@/components/modules/landing/home/nav-menu-links"
import ContactContent from "@/components/modules/landing/contact/contact-content"

const Contact = () => {
    return (
        <>
            <Navbar>
                <NavMenuLinks />
            </Navbar>
            <ContactContent />
        </>
    )
}

export default Contact
