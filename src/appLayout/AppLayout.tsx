import TopNav from "../components/layout/TopNav"
import Footer from "../footer/Footer";

function AppLayout({children, page}: {children: React.ReactNode; page: string}) {
  return (
    <div className="">
        <div className="sticky top-0 z-50">
            <TopNav page={page} />
        </div>
        <main>
        {children}
        </main>
        <Footer />
    </div>
  )
}

export default AppLayout