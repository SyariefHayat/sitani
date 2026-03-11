import AcademySection from "@/components/modules/landing/home/academy-section"
import EcosystemSection from "@/components/modules/landing/home/ecosystem-section"
import FeatureSection from "@/components/modules/landing/home/feature-section"
import HeroSection from "@/components/modules/landing/home/hero-section"
import StatisticSection from "@/components/modules/landing/home/statistic-section"
import Navbar from "@/components/layouts/landing-layout/navbar"
import NavMenuLinks from "@/components/modules/landing/home/nav-menu-links"

const Home = () => {
    return (
        <>
            <Navbar>
                <NavMenuLinks />
            </Navbar>
            <HeroSection />
            <StatisticSection />
            <FeatureSection />
            <EcosystemSection />
            <AcademySection />
        </>
    )
}

export default Home