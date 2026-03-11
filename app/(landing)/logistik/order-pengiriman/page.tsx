import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/logistik/nav-user-profile"
import SubNavbar from "@/components/modules/landing/logistik/sub-navbar"
import OrderPengirimanSection from "@/components/modules/landing/logistik/order-pengiriman-section"

const OrderPengirimanPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <OrderPengirimanSection />
            </div>
        </>
    )
}

export default OrderPengirimanPage
