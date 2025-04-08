import { Navbar } from "@/components/common/navbar"
import { Header } from "@/components/common/header"
import { About } from "@/components/sections/about/about"
import { Footer } from "@/components/common/footer"
import { Skills } from "@/components/sections/skills/skills"
import { Projects } from "@/components/sections/projects/projects"
import { Certifications } from "@/components/sections/certifications/certifications"
import { Recommendations } from "@/components/sections/recommendations/recommendations"
import { Contact } from "@/components/sections/contact/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

