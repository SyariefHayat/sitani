import Navbar from "@/components/layouts/landing-layout/navbar"
import NavMenuLinks from "@/components/modules/landing/home/nav-menu-links"
import HeroSection from "@/components/modules/landing/marketplace/hero-section"
import MarketplaceContent from "@/components/modules/landing/marketplace/marketplace-content"

const Marketplace = () => {
    return (
        <>
            <Navbar>
                <NavMenuLinks />
            </Navbar>
            <HeroSection />
            <MarketplaceContent />
        </>
    )
}

export default Marketplace
