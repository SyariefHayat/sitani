import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/distributor/nav-user-profile"
import SubNavbar from "@/components/modules/landing/distributor/sub-navbar"
import GudangContent from "@/components/modules/landing/distributor/gudang-content"

const GudangPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <GudangContent />
            </div>
        </>
    )
}

export default GudangPage
