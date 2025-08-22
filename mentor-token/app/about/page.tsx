import Header from "@/components/header/header"
import Footer from "@/components/features and footer/footer"
import AboutHero from "@/components/hero/about-hero"
import TeamMembers from "@/components/team-members/team-members"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <TeamMembers />
      <Footer />
    </main>
  )
}
