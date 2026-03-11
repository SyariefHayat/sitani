import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/distributor/nav-user-profile"
import NotifikasiContent from "@/components/modules/landing/distributor/notifikasi-content"

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
