import LoadingScreen from "@/components/loading-screen"
import Navigation from "@/components/navigation"
import ClientHeroWrapper from "@/components/client-hero-wrapper"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navigation />
      <main className="relative overflow-hidden">
        <ClientHeroWrapper />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
