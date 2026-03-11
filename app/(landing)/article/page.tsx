import Navbar from "@/components/layouts/landing-layout/navbar"
import FeaturedArticleSection from "@/components/modules/landing/article/featured-article-section"
import HeroSection from "@/components/modules/landing/article/hero-section"
import KategoriSection from "@/components/modules/landing/article/kategori-section"
import NavUserProfile from "@/components/modules/landing/article/nav-user-profile"
import StatisticSection from "@/components/modules/landing/article/statistic-section"
import SubNavbar from "@/components/modules/landing/article/sub-navbar"

const Article = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <HeroSection />
            <StatisticSection />
            <FeaturedArticleSection />
            <KategoriSection />
        </>
    )
}

export default Article