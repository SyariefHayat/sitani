import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/article/nav-user-profile"
import SubNavbar from "@/components/modules/landing/article/sub-navbar"
import PengaturanContent from "@/components/modules/landing/article/pengaturan-content"

const PengaturanPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <PengaturanContent />
            </div>
        </>
    )
}

export default PengaturanPage
