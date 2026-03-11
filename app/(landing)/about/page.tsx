import Navbar from "@/components/layouts/landing-layout/navbar"
import NavMenuLinks from "@/components/modules/landing/home/nav-menu-links"
import AboutContent from "@/components/modules/landing/about/about-content"

const About = () => {
    return (
        <>
            <Navbar>
                <NavMenuLinks />
            </Navbar>
            <AboutContent />
        </>
    )
}

export default About
