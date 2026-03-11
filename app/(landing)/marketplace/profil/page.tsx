import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/marketplace/nav-user-profile"
import ProfilContent from "@/components/modules/landing/marketplace/profil-content"

const ProfilPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <ProfilContent />
        </>
    )
}

export default ProfilPage
