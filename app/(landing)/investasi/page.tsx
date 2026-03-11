import Navbar from "@/components/layouts/landing-layout/navbar"
import HeroSection from "@/components/modules/landing/investasi/hero-section"
import { LineChartSection } from "@/components/modules/landing/investasi/line-chart-section"
import NavUserProfile from "@/components/modules/landing/investasi/nav-user-profile"
import ProjectSection from "@/components/modules/landing/investasi/project-section"
import StatisticSection from "@/components/modules/landing/investasi/statictic-section"
import SubNavbar from "@/components/modules/landing/investasi/sub-navbar"

const Investasi = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <HeroSection />
            <StatisticSection />
            <LineChartSection />
            <ProjectSection />
        </>
    )
}

export default Investasi