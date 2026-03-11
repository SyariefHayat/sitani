import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/academy/nav-user-profile"
import SubNavbar from "@/components/modules/landing/academy/sub-navbar"
import KelasSayaContent from "@/components/modules/landing/academy/kelas-saya-content"

const KelasSayaPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <KelasSayaContent />
        </>
    )
}

export default KelasSayaPage
