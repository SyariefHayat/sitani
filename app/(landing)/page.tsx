import AcademySection from "@/components/modules/landing/academy-section"
import EcosystemSection from "@/components/modules/landing/ecosystem-section"
import FeatureSection from "@/components/modules/landing/feature-section"
import HeroSection from "@/components/modules/landing/hero-section"
import StatisticSection from "@/components/modules/landing/statistic-section"

const Home = () => {
    return (
        <>
            <HeroSection />
            <StatisticSection />
            <FeatureSection />
            <EcosystemSection />
            <AcademySection />
        </>
    )
}

export default Home