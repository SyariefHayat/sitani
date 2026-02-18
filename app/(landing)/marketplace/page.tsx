import Navbar from "@/components/layouts/landing-layout/navbar"
import NavMenuLinks from "@/components/modules/landing/home/nav-menu-links"
import HeroSection from "@/components/modules/landing/marketplace/hero-section"
import CategorySection from "@/components/modules/landing/marketplace/category-section"
import ProductSection from "@/components/modules/landing/marketplace/product-section"

const Marketplace = () => {
    return (
        <>
            <Navbar>
                <NavMenuLinks />
            </Navbar>
            <HeroSection />
            <CategorySection />
            <ProductSection />
        </>
    )
}

export default Marketplace
