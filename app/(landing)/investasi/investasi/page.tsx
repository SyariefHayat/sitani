import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/investasi/nav-user-profile"
import SubNavbar from "@/components/modules/landing/investasi/sub-navbar"
import InvestasiContent from "@/components/modules/landing/investasi/investasi-content"

const InvestasiPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <InvestasiContent />
            </div>
        </>
    )
}

export default InvestasiPage
