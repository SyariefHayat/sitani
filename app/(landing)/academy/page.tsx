import Navbar from "@/components/layouts/landing-layout/navbar"
import HeroSection from "@/components/modules/landing/academy/hero-section"
import KelasPopulerSection from "@/components/modules/landing/academy/kelas-populer-section"
import NavUserProfile from "@/components/modules/landing/academy/nav-user-profile"
import ProgressChartSection from "@/components/modules/landing/academy/progress-chart-section"
import StatisticSection from "@/components/modules/landing/academy/statistic-section"
import SubNavbar from "@/components/modules/landing/academy/sub-navbar"
import WebinarSection from "@/components/modules/landing/academy/webinar-section"

const Academy = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <HeroSection />
            <StatisticSection />
            <KelasPopulerSection />
            <ProgressChartSection />
            <WebinarSection />
        </>
    )
}

export default Academy