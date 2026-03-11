import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/article/nav-user-profile"
import SubNavbar from "@/components/modules/landing/article/sub-navbar"
import NotifikasiContent from "@/components/modules/landing/article/notifikasi-content"

const NotifikasiPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <NotifikasiContent />
            </div>
        </>
    )
}

export default NotifikasiPage
