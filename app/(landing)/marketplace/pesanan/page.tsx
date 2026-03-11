import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/marketplace/nav-user-profile"
import PesananContent from "@/components/modules/landing/marketplace/pesanan-content"

const PesananPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <PesananContent />
        </>
    )
}

export default PesananPage
