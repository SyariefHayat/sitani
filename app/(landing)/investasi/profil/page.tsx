import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/investasi/nav-user-profile"
import ProfilContent from "@/components/modules/landing/investasi/profil-content"

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
