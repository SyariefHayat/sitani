import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/academy/nav-user-profile"
import SubNavbar from "@/components/modules/landing/academy/sub-navbar"
import PusatBantuanContent from "@/components/modules/landing/academy/pusat-bantuan-content"

const PusatBantuanPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <PusatBantuanContent />
        </>
    )
}

export default PusatBantuanPage
