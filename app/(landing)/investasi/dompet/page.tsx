import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/investasi/nav-user-profile"
import DompetContent from "@/components/modules/landing/investasi/dompet-content"

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
