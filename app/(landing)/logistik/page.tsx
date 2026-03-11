import Navbar from "@/components/layouts/landing-layout/navbar"
import ArmadaSection from "@/components/modules/landing/logistik/armada-section"
import BarChartSection from "@/components/modules/landing/logistik/bar-chart-section"
import HeroSection from "@/components/modules/landing/logistik/hero-section"
import NavUserProfile from "@/components/modules/landing/logistik/nav-user-profile"
import OrderPengirimanSection from "@/components/modules/landing/logistik/order-pengiriman-section"
import StatisticSection from "@/components/modules/landing/logistik/statistic-section"
import SubNavbar from "@/components/modules/landing/logistik/sub-navbar"

const Logistik = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <HeroSection />
            <StatisticSection />
            <BarChartSection />
            <ArmadaSection />
            <OrderPengirimanSection />
        </>
    )
}

export default Logistik