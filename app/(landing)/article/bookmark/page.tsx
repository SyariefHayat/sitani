import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/article/nav-user-profile"
import SubNavbar from "@/components/modules/landing/article/sub-navbar"
import BookmarkContent from "@/components/modules/landing/article/bookmark-content"

const BookmarkPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14">
                <BookmarkContent />
            </div>
        </>
    )
}

export default BookmarkPage
