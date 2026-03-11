import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/logistik/nav-user-profile"
import SubNavbar from "@/components/modules/landing/logistik/sub-navbar"
import ArmadaSection from "@/components/modules/landing/logistik/armada-section"

const ArmadaPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <ArmadaSection />
            </div>
        </>
    )
}

export default ArmadaPage
