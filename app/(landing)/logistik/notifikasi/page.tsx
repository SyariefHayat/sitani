import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/logistik/nav-user-profile"
import NotifikasiContent from "@/components/modules/landing/logistik/notifikasi-content"

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
