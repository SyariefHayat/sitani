import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/investasi/nav-user-profile"
import SubNavbar from "@/components/modules/landing/investasi/sub-navbar"
import LaporanContent from "@/components/modules/landing/investasi/laporan-content"

const LaporanPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <LaporanContent />
            </div>
        </>
    )
}

export default LaporanPage
