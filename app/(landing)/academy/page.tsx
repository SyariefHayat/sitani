import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/academy/nav-user-profile"
import SubNavbar from "@/components/modules/landing/academy/sub-navbar"

const Academy = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
        </>
    )
}

export default Academy