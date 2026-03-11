import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/distributor/nav-user-profile"
import SubNavbar from "@/components/modules/landing/distributor/sub-navbar"
import BulkOrderContent from "@/components/modules/landing/distributor/bulk-order-content"

const BulkOrderPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <BulkOrderContent />
            </div>
        </>
    )
}

export default BulkOrderPage
