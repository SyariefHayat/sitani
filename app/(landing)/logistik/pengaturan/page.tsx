import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/logistik/nav-user-profile"
import PengaturanContent from "@/components/modules/landing/logistik/pengaturan-content"

const PengaturanPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <PengaturanContent />
        </>
    )
}

export default PengaturanPage
