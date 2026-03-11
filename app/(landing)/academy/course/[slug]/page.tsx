import { notFound } from "next/navigation"
import { COURSES } from "@/lib/constants"
import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/academy/nav-user-profile"
import SubNavbar from "@/components/modules/landing/academy/sub-navbar"
import CourseDetail from "@/components/modules/landing/academy/course-detail"

interface CoursePageProps {
    params: Promise<{ slug: string }>
}

const CoursePage = async ({ params }: CoursePageProps) => {
    const { slug } = await params
    const course = COURSES.find((c) => c.slug === slug)

    if (!course) {
        notFound()
    }

    const otherCourses = COURSES.filter((c) => c.slug !== slug).slice(0, 3)

    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <CourseDetail course={course} otherCourses={otherCourses} />
        </>
    )
}

export default CoursePage
