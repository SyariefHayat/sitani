import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/marketplace/nav-user-profile"
import CartContent from "@/components/modules/landing/marketplace/cart-content"

const CartPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <CartContent />
        </>
    )
}

export default CartPage
