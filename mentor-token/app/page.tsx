import Header from "@/components/header/header"
import Hero from "@/components/hero/hero"
import Features from "@/components/features and footer/features"
import DashboardPreview from "@/components/dashboard-preview/dashboard-preview"
import Footer from "@/components/features and footer/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DashboardPreview />
      <Footer />
    </main>
  )
}
