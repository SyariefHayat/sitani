import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/investasi/nav-user-profile"
import PortofolioContent from "@/components/modules/landing/investasi/portofolio-content"

const PortofolioPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <PortofolioContent />
        </>
    )
}

export default PortofolioPage
