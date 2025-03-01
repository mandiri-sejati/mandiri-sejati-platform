import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />
            <div className="pt-5 pb-9">
                {children}
            </div>
            <Footer />
        </div>
    )
}