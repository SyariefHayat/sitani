import Navbar from "@/components/layouts/landing-layout/navbar"
import BarChartSection from "@/components/modules/landing/distributor/bar-chart-section"
import BulkOrderSection from "@/components/modules/landing/distributor/bulk-order-section"
import HeroSection from "@/components/modules/landing/distributor/hero-section"
import NavUserProfile from "@/components/modules/landing/distributor/nav-user-profile"
import StatisticSection from "@/components/modules/landing/distributor/statictic-section"
import SubNavbar from "@/components/modules/landing/distributor/sub-navbar"
import WarehouseStockSection from "@/components/modules/landing/distributor/warehouse-stock-section"

const Distributor = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <HeroSection />
            <StatisticSection />
            <BarChartSection />
            <WarehouseStockSection />
            <BulkOrderSection />
        </>
    )
}

export default Distributor