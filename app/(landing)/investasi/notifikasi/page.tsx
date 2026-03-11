import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/investasi/nav-user-profile"
import NotifikasiContent from "@/components/modules/landing/investasi/notifikasi-content"

const NotifikasiPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <NotifikasiContent />
        </>
    )
}

export default NotifikasiPage
