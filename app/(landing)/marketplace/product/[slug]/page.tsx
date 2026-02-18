import { notFound } from "next/navigation"
import { MARKETPLACE_PRODUCTS } from "@/lib/constants"
import Navbar from "@/components/layouts/landing-layout/navbar"
import NavMenuLinks from "@/components/modules/landing/home/nav-menu-links"
import ProductDetail from "@/components/modules/landing/marketplace/product-detail"

interface ProductPageProps {
    params: Promise<{ slug: string }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
    const { slug } = await params
    const product = MARKETPLACE_PRODUCTS.find((p) => p.slug === slug)

    if (!product) {
        notFound()
    }

    const otherProducts = MARKETPLACE_PRODUCTS.filter((p) => p.slug !== slug && p.category === product.category).slice(0, 3)

    return (
        <>
            <Navbar>
                <NavMenuLinks />
            </Navbar>
            <ProductDetail product={product} otherProducts={otherProducts} />
        </>
    )
}

export default ProductPage
