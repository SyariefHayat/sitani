import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/marketplace/nav-user-profile"
import HeroSection from "@/components/modules/landing/marketplace/hero-section"
import MarketplaceContent from "@/components/modules/landing/marketplace/marketplace-content"

const Marketplace = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <HeroSection />
            <MarketplaceContent />
        </>
    )
}

export default Marketplace
