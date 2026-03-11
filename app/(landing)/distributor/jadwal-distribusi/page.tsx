import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/distributor/nav-user-profile"
import SubNavbar from "@/components/modules/landing/distributor/sub-navbar"
import JadwalDistribusiContent from "@/components/modules/landing/distributor/jadwal-distribusi-content"

const JadwalDistribusiPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <JadwalDistribusiContent />
            </div>
        </>
    )
}

export default JadwalDistribusiPage
