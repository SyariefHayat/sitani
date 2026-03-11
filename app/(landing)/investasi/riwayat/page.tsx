import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/investasi/nav-user-profile"
import SubNavbar from "@/components/modules/landing/investasi/sub-navbar"
import RiwayatContent from "@/components/modules/landing/investasi/riwayat-content"

const RiwayatPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <RiwayatContent />
            </div>
        </>
    )
}

export default RiwayatPage
