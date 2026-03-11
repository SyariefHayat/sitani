import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/article/nav-user-profile"
import SubNavbar from "@/components/modules/landing/article/sub-navbar"
import KategoriContent from "@/components/modules/landing/article/kategori-content"

const KategoriPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <KategoriContent />
            </div>
        </>
    )
}

export default KategoriPage
