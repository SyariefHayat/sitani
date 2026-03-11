import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/logistik/nav-user-profile"
import ProfilContent from "@/components/modules/landing/logistik/profil-content"

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
