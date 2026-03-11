import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/article/nav-user-profile"
import SubNavbar from "@/components/modules/landing/article/sub-navbar"
import ProfilContent from "@/components/modules/landing/article/profil-content"

const ProfilPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <ProfilContent />
            </div>
        </>
    )
}

export default ProfilPage
