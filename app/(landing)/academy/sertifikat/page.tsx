import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/academy/nav-user-profile"
import SubNavbar from "@/components/modules/landing/academy/sub-navbar"
import SertifikatContent from "@/components/modules/landing/academy/sertifikat-content"

const SertifikatPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <SertifikatContent />
        </>
    )
}

export default SertifikatPage
