import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/logistik/nav-user-profile"
import DompetContent from "@/components/modules/landing/logistik/dompet-content"

const DompetPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <DompetContent />
        </>
    )
}

export default DompetPage
