import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/academy/nav-user-profile"
import SubNavbar from "@/components/modules/landing/academy/sub-navbar"
import WebinarContent from "@/components/modules/landing/academy/webinar-content"

const WebinarPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <WebinarContent />
        </>
    )
}

export default WebinarPage
